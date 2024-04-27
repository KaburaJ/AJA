from flask import Flask, request, send_file
import urllib.request
import os
import subprocess

app = Flask(__name__)

@app.route("/")
def home():
    return "Welcome to AJA Pose Estimation Server"

@app.route("/download_dataset", methods=["GET"])
def download_dataset():
    url = "https://storage.googleapis.com/figures-gp/animal-kingdom/dataset.zip"
    destination = "dataset.zip"
    if not os.path.exists(destination):
        urllib.request.urlretrieve(url, destination)
        os.system("unzip dataset.zip")
        return "Dataset downloaded and unzipped successfully!"
    else:
        return "Dataset already exists!"

@app.route("/download_model", methods=["GET"])
def download_model():
    url = "https://storage.googleapis.com/figures-gp/animal-kingdom/all_animals_no_pretrain_106.pth"
    destination = "all_animals_no_pretrain_106.pth"
    if not os.path.exists(destination):
        urllib.request.urlretrieve(url, destination)
        return "Model downloaded successfully!"
    else:
        return "Model already exists!"

@app.route("/install_aja_pose", methods=["GET"])
def install_aja_pose():
    if not os.path.exists("AJA-pose"):
        subprocess.run(["git", "clone", "https://github.com/Antony-gitau/AJA-pose.git"])
    
    subprocess.run(["pip", "install", "-e", "./AJA-pose/code"])
    
    return "AJA Pose installed successfully!"

@app.route("/test_model", methods=["POST"])
def test_model():
    data = request.json
    images_directory = data.get('images_directory')
    mpii_json = data.get('mpii_json')
    model_file = data.get('model_file')
    
    return send_file(images_directory, as_attachment=True)

@app.route("/train_model", methods=["POST"])
def train_model():
    data = request.json
    images_directory = data.get('images_directory')
    train_json = data.get('train_json')
    valid_json = data.get('valid_json')
    model_file = data.get('model_file')
    
    return send_file(images_directory, as_attachment=True)

if __name__ == "__main__":
    app.run(debug=True)
