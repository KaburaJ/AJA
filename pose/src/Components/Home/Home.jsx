import React, { useState } from "react";
import axios from "axios";
import './Home.css';

const Home = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [results, setResults] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreviewImage(URL.createObjectURL(file));
        }
    };

    const handleUpload = () => {
        const formData = new FormData();
        formData.append("file", selectedFile);

        axios.post("http://localhost:5001/api/upload", formData, {
            withCredentials: true  // Add this option
        })
            .then(response => {
                console.log(response.data);
                setResults(response.data);
            })
            .catch(error => {
                console.error("Error uploading file: ", error);
            });
    };

    return (
        <div className="home">
            <h3 className="text-center" style={{ marginLeft: "350px", paddingLeft: "30px", paddingRight: "30px", paddingTop: "30px" }}>Home</h3>
            <div className="action">
                <div className="file-upload-main">
                    <div className="file-upload">
                        <div className="upload">
                            <input placeholder="Upload Image or Video" type="file" id="file" accept="image/*" onChange={handleFileChange} />
                            {previewImage && (
                                <>
                                    <img src={previewImage} alt="Preview" className="preview-image" />
                                </>
                            )}
                        </div>
                        <button className="select-image" onClick={handleUpload}>Upload Image</button>
                    </div>
                </div>
                <div className="output">
                    <h6>Objects Detected</h6>
                </div>
            </div>
            {results && (
                <div>
                    <h4>Bounding Boxes Detected: {results.length}</h4>
                    {results.map((result, index) => (
                        <div key={index}>
                            <h5>Bounding Box {index + 1}</h5>
                            <p>Class: {result.class}</p>
                            <p>Coordinates: {result.coordinates.join(", ")}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
