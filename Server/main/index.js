const express = require('express');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const cors = require('cors');

// Include your credentials directly here
const credentials = 
    {
        "name": "figures-gp",
        "location": "US",
        "locationType": "multi-region",
        "storageClass": "STANDARD",
        "versioning": {
          "enabled": false
        },
        "logging": {
          "logBucket": "",
          "logObjectPrefix": ""
        },
        "website": {
          "mainPageSuffix": "",
          "notFoundPage": ""
        },
        "cors": [],
        "lifecycle": {
          "rule": []
        },
        "labels": {},
        "requesterPays": false,
        "encryption": {
          "defaultKmsKeyName": ""
        },
        "retentionPolicy": {
          "retentionPeriod": ""
        },
        "iamConfiguration": {
          "uniformBucketLevelAccess": {
            "enabled": true
          },
          "publicAccessPrevention": "unspecified"
        },
        "billing": {
          "requesterPays": false
        },
        "defaultEventBasedHold": false,
        "rpo": "DEFAULT",
        "selfLink": "https://www.googleapis.com/storage/v1/b/figures-gp",
        "metageneration": "1",
        "created": "2023-10-18T09:47:36.000Z",
        "updated": "2023-10-18T09:51:00.000Z",
        "etag": "",
        "projectNumber": "",
        "publicAccess": {
          "publicAccessStatus": "Public to Internet"
        },
        "protection": {
          "softDeletePolicy": "7 days"
        }
      }

const app = express();
const port = 5001;

app.use(cors({ 
  origin: 'http://localhost:3001', // Allow requests from the frontend origin
  credentials: true // Allow credentials
}));
app.use(express.json());

// Initialize Google Cloud Storage with explicit credentials
const storage = new Storage({ credentials });

const bucketName = 'pose'; // Replace with your actual bucket name

const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });

app.post('/api/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('No file uploaded.');
    }

    console.log('Received file:', req.file.originalname);

    const blob = storage.bucket(bucketName).file(req.file.originalname);
    const blobStream = blob.createWriteStream();

    blobStream.on('error', (err) => {
      console.error('File upload error:', err);
      res.status(500).send({ message: 'File upload error', error: err });
    });

    blobStream.on('finish', async () => {
      try {
        await blob.makePublic();
        const publicUrl = `https://storage.googleapis.com/${bucketName}/${blob.name}`;
        console.log('File uploaded successfully:', publicUrl);
        res.status(200).send({ message: 'File uploaded successfully', url: publicUrl });
      } catch (error) {
        console.error('Error making file public:', error);
        res.status(500).send({ message: 'Server error', error: error.message });
      }
    });

    blobStream.end(req.file.buffer);
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).send({ message: 'Server error', error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
