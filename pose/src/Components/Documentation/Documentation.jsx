import React from "react";
import './Documentation.css'

const Documentation = () => {
    return (
        <div className="documentation-container">
            <main id="main-doc">
                <section className="main-section" id="Overview">
                    <h3 style={{marginBottom:"20px"}}>Animal Pose Estimation Documentation</h3>
                    <p>I have not failed. I've just found 10,000 ways that won't work. </p>
                    <p>~Thomas Edison</p>
                    <p style={{marginTop:"50px", marginBottom:"20px"}}>... And 10000 ways we did find that didn't work</p>
                </section>
                <section className="main-section" id="Introduction">
                    <h3 style={{marginBottom:"20px"}}>Introduction</h3>
                    <p>Animal pose estimation is a field of computer vision and artificial intelligence aimed at detecting and tracking the poses or movements of animals in videos or images. This documentation aims to provide an overview of the theory, techniques, and applications of animal pose estimation.</p>
                    <p>Throughout history, researchers have sought to understand animal behavior and movement patterns for various purposes, including ecological studies, wildlife conservation, and behavioral neuroscience. Traditional methods of observing and manually recording animal behavior have limitations in terms of scalability, accuracy, and objectivity. With advancements in computer vision and machine learning, automated pose estimation techniques have emerged as powerful tools for analyzing animal behavior.</p>
                </section>
                <section className="main-section" id="History">
                    <h3 style={{marginBottom:"20px"}}>History of Pose Estimation</h3>
                    <p>The history of pose estimation can be traced back to the early days of computer vision research. Early attempts at pose estimation primarily focused on human subjects and relied on handcrafted features and geometric models. However, these approaches were limited in their ability to handle variations in pose, appearance, and environmental conditions.</p>
                    <p>In recent years, the field has witnessed significant advancements fueled by deep learning techniques, particularly convolutional neural networks (CNNs). Deep learning-based pose estimation methods have demonstrated remarkable performance in various domains, including human pose estimation, animal pose estimation, and object detection.</p>
                    <p>Key milestones in the history of pose estimation include the development of landmark methods such as OpenPose, which introduced a real-time multi-person pose estimation system, and DeepLabCut, which pioneered markerless pose estimation using deep learning.</p>
                </section>
                <section className="main-section" id="Objectives">
                    <h3 style={{marginBottom:"20px"}}>Objectives</h3>
                    <ul>
                        <li>Determine a specific animal based on their movement styles</li>
                        <li>Create an overlap of cameras to cover an entire conservancy</li>
                    </ul>
                </section>
                <section className="main-section" id="LiteratureReview">
                    <h3 style={{marginBottom:"20px"}}>Literature Review</h3>
                    <p>The literature review provides insights into the current state-of-the-art in animal pose estimation research. It covers key studies, methodologies, and advancements in the field, including:</p>
                    <ul>
                        <li>Behavioral research for understanding animal intelligence</li>
                        <li>Methods for automatically quantifying behavior from video data</li>
                        <li>Comparison of animal behavior across pharmacological and disease conditions</li>
                        <li>Inferencing on live video for real-time pose estimation</li>
                    </ul>
                </section>
                <section className="main-section" id="Methods">
                    <h3 style={{marginBottom:"20px"}}>Methods</h3>
                    <p>Various methods and algorithms have been developed for animal pose estimation, including:</p>
                    <ul>
                        <li>Deep learning-based approaches such as DeepLabCut, DeepPoseKit, and AlphaTracker</li>
                        <li>Geometric deep learning techniques for 3D kinematic profiling</li>
                        <li>Software pipelines for automated analysis of social behaviors in animals</li>
                    </ul>
                </section>
                <section className="main-section" id="Conclusion">
                    <h3 style={{marginBottom:"20px"}}>Conclusion</h3>
                    <p>Animal pose estimation holds immense potential for advancing our understanding of animal behavior, ecology, and neuroscience. By leveraging computer vision and machine learning technologies, researchers can analyze vast amounts of video data to uncover valuable insights into animal movement patterns, interactions, and responses to environmental stimuli. Continued research and development in this field are essential for addressing pressing conservation challenges and promoting the welfare of wildlife populations.</p>
                </section>
            </main>
        </div>
    );
};

export default Documentation;
