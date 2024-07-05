from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import numpy as np
from aja_pose import Model
import os

app = Flask(__name__)
CORS(app)

# Initialize the model
model = Model()

@app.route("/api/upload", methods=["POST"])
def upload_file():
    if "file" not in request.files:
        return jsonify({"error": "No file part"}), 400

    file = request.files["file"]

    if file.filename == "":
        return jsonify({"error": "No selected file"}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        file.save(file_path)

        # Perform object detection and pose estimation
        results = process_image(file_path)

        return jsonify(results), 200

    return jsonify({"error": "Invalid file type"}), 400

def process_image(file_path):
    # Load the image
    image = Image.open(file_path).convert("RGB")

    # Perform object detection
    object_results = model.object_detection(file_path)

    # Perform pose estimation
    pose_results = model.pose_estimation(file_path)

    # Combine object detection and pose estimation results
    combined_results = {
        "objects": object_results,
        "pose": pose_results
    }

    return combined_results

if __name__ == "__main__":
    app.run(debug=True)
