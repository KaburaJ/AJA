import React from "react";
import homePic from '../../Common/Images/pose1.png'
import './Home.css'
import quality from '../../Common/Images/quality.PNG'

const Home = () => {
    return (
        <div className="home">
            <div className="file-upload-main">
            <div className="file-upload">
                <form id="file-upload-form" className="uploader">
                    <input id="file-upload" type="file" name="fileUpload" accept="image/*" multiple webkitdirectory="true" />
                    <label htmlFor="file-upload" id="file-drag">
                        <img id="file-image" src="#" alt="Preview" className="hidden" />
                        <div id="start">
                            <i className="fa fa-download" aria-hidden="true" />
                            <div>Select a file or folder or drag here</div>
                            <div id="notimage" className="hidden">
                                Please select an image
                            </div>
                            <span id="file-upload-btn" className="btn btn-primary">
                                Select a file or folder
                            </span>
                        </div>
                        <div id="response" className="hidden">
                            <div id="messages" />
                            <progress className="progress" id="file-progress" value={0}>
                                <span>0</span>%
                            </progress>
                        </div>
                    </label>
                </form>
            </div>
            <div className="pics">
                <img className="pic" src={homePic} alt=""></img>
                <h3>AJA Pose Estimation </h3>
                <p style={{marginTop:"-5%"}}>Working hard for your poses</p>
            </div>
            </div>
            <div className="main-body">
                <h3>Features</h3>
                <div className="main-content">
                <div className="content">
                <h3>Our model is built on VHR</h3>
                <p>It provides quality in terms of the keypoints it predicts</p>
                </div>
                <img src={quality} alt="Quality"></img>
                </div>
            </div>
            <div className="main-body" style={{marginTop:"1%"}}>
                <div className="main-content">
                <img src={quality} alt="Quality"></img>
                <div className="content">
                <h3>Our model is built on VHR</h3>
                <p>It provides quality in terms of the keypoints it predicts</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home
