import React, { useState } from "react";
import homePic from '../../Common/Images/home.PNG'
import './Home.css'
import quality from '../../Common/Images/quality.PNG'

const Home = () => {

    const [opMode, setOpMode] = useState("default")

    const downloadDataset = async () => {
        await fetch('/download_dataset', { method: 'GET' });
    }

    const downloadModel = async () => {
        await fetch('/download_model', { method: 'GET' });
    }

    const installAjaPose = async () => {
        await fetch('/install_aja_pose', { method: 'GET' });
    }

    const testModel = async () => {
        const response = await fetch('/test_model', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                images_directory: 'path/to/images',
                mpii_json: 'path/to/mpii/json',
                model_file: 'path/to/model/file'
            })
        });

        const blob = await response.blob();
        // Handle the received blob data as per your requirement
    }

    const trainModel = async () => {
        const response = await fetch('/train_model', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                images_directory: 'path/to/images',
                train_json: 'path/to/train/json',
                valid_json: 'path/to/valid/json',
                model_file: 'path/to/model/file'
            })
        });

        const blob = await response.blob();
        // Handle the received blob data as per your requirement
    }

    return (
        <div className="home">
            <div className="file-upload-main">
                <h3 className="text-center" style={{ marginBottom: "30px" }}>Home</h3>
                <div className="options-select">
                <p>To reproduce our model's findings, please click on the buttons below</p>
                <p>Please note that the processes below are GPU intensive and will be utilizing your PC's resources.</p>
                <p style={{marginBottom:"30px"}}>A great alternative is using our <a href="https://colab.research.google.com/drive/1N3v7Y-PN9uvw5V5PUbAYqh9vGkLfm_Km?usp=sharing#scrollTo=jtOTEOF14Wq2">Google Colab</a> instance</p>
                </div>
                <div className="pre-buttons">
                    <button onClick={downloadDataset}>Download Dataset</button>
                    <button onClick={downloadModel}>Download Model</button>
                    <button onClick={installAjaPose}>Install AJA Pose</button>
                    <button onClick={trainModel}>Generate image Keypoints</button>
                </div>
                <div className="top">
                    <div className="options-select">
                        <p>Select the Operation Mode</p>
                        <select id="output-type" style={{ cursor: "pointer", height: "60px", borderColor: "#1D1B22", borderWidth: "2px", backgroundColor: "", color: "hsl(0, 0%, 50%)", marginTop: "30px", marginBottom: "10px", borderRadius: "20px", padding: "10px" }}>
                            <option value="default" selected style={{ cursor: "pointer" }} onClick={() => setOpMode("default")}>Default</option>
                            <option value="protocol" style={{ cursor: "pointer" }} onClick={() => setOpMode("protocol")}>Protocol Based</option>
                        </select>
                    </div>
                    {opMode && opMode === "protocol" && (
                        <div className="protocol">
                            <div class="protocol-output-section">
                                <p for="protocol-select">Select Protocol:</p>
                                <select id="protocol-type" style={{ cursor: "pointer", height: "60px", borderColor: "#1D1B22", borderWidth: "2px", backgroundColor: "", color: "hsl(0, 0%, 50%)", marginTop: "30px", marginBottom: "10px", borderRadius: "20px", padding: "10px" }}>
                                    <option value="P1" selected>P1</option>
                                    <option value="P2">P2</option>
                                    <option value="P3">P3</option>
                                </select>
                            </div>
                        </div>
                    )}
                </div>

                <div className="file-upload">
                    <form id="file-upload-form" className="uploader">
                        <input id="file-upload" type="file" name="fileUpload" accept="image/*" multiple webkitdirectory="true" />
                        <label htmlFor="file-upload" id="file-drag">
                            <img id="file-image" src="#" alt="Preview" className="hidden" />
                            <div id="start">
                                <i className="fa fa-download" aria-hidden="true" />
                                <div>Select kjh folder or drag it here</div>
                                <div id="notimage" className="hidden">
                                    Please select an image
                                </div>
                                <span id="file-upload-btn" className="btn btn-primary">
                                    Select a folder
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
                    <p style={{ marginTop: "-5%" }}>Working hard for your poses</p>
                </div>

                {opMode && opMode === "default" && (
                    <div className="default">
                        <div>
                            <p >Please enter your labels</p>
                            <p>Use the predefined structure below</p>
                            <textarea
                                id="json-input"
                                placeholder="Enter JSON data here..."
                                style={{ color: "hsl(0, 0%, 50%)", width: "95%", border: "none", outline: "none", borderRadius: "30px", height: "fit-content", marginBottom: "10px", backgroundColor: "#1D1B22", color: "white" }}
                                defaultValue={JSON.stringify(
                                    {
                                        image: "ABOQZLHH\/ABOQZLHH_f000053.jpg",
                                        animal: "Frog",
                                        animal_parent_class: "Amphibian",
                                        animal_class: "Amphibian",
                                        animal_subclass: "Frog \/ Toad",
                                        joints_vis: [
                                            1,
                                            0,
                                            1,
                                            1,
                                            0,
                                            1,
                                            1,
                                            0,
                                            1,
                                            0,
                                            1,
                                            0,
                                            1,
                                            1,
                                            0,
                                            1,
                                            0,
                                            1,
                                            0,
                                            1,
                                            1,
                                            1,
                                            1
                                        ],
                                        joints: [
                                            [
                                                423.4222954623,
                                                42.0532319392
                                            ],
                                            [
                                                -1.0,
                                                -1.0
                                            ],
                                            [
                                                446.5136437276,
                                                43.0544993663
                                            ],
                                            [
                                                475.6225589669,
                                                49.0595690748
                                            ],
                                            [
                                                -1.0,
                                                -1.0
                                            ],
                                            [
                                                431.4609428053,
                                                73.09252218
                                            ],
                                            [
                                                476.6190455721,
                                                50.0633713561
                                            ],
                                            [
                                                -1.0,
                                                -1.0
                                            ],
                                            [
                                                401.3344605919,
                                                103.1381495564
                                            ],
                                            [
                                                -1.0,
                                                -1.0
                                            ],
                                            [
                                                385.3941883038,
                                                117.1812420786
                                            ],
                                            [
                                                -1.0,
                                                -1.0
                                            ],
                                            [
                                                424.2012310634,
                                                136.8926981533
                                            ],
                                            [
                                                346.1517640613,
                                                125.1191381496
                                            ],
                                            [
                                                -1.0,
                                                -1.0
                                            ],
                                            [
                                                269.274014231,
                                                167.2027883397
                                            ],
                                            [
                                                -1.0,
                                                -1.0
                                            ],
                                            [
                                                373.2606793007,
                                                151.1977186312
                                            ],
                                            [
                                                -1.0,
                                                -1.0
                                            ],
                                            [
                                                279.0,
                                                178.0
                                            ],
                                            [
                                                262.0,
                                                168.0
                                            ],
                                            [
                                                263.0,
                                                174.0
                                            ],
                                            [
                                                267.0,
                                                178.0
                                            ]
                                        ],
                                        scale: 1.0730952279,
                                        center: [
                                            369.309522786,
                                            110.0266159696
                                        ],
                                        Protocol3amphibian: "test"
                                    },
                                    null,
                                    4
                                )}
                            />
                        </div>
                        <button id="predict" onClick={testModel}>Save JSON Label</button>
                    </div>
                )}
            </div >

        </div>
    )
}

export default Home;
