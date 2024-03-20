import React from "react";
import './About.css'
import about1 from '../../Common/Images/about1.png'
import about2 from '../../Common/Images/about2.png'

const About = () => {
  return (
    <>
      <div id="about-main" style={{marginLeft:"15%"}}>
        <div className="story-container">
          <div className="need-for-dx-container">
            <h3 className="text-center">About Us</h3>
            <p>
              AJA was born as a result of the 2024 ICME Challenge. 
              It is a combination of our three names: Antony Gitau, Joan Kabura and Austin Kabura. 
              And who are we? We are the participants of the challenge. AJA serves as our documentation interface which was born as a result of our need to document our project.
              Traditional methods seemed all too common to us, so, harnessing our web development skills, we came up with this: AJA.
            </p>
            <div className="img-container">
              <img
                src={about1}
                alt="apimatic developer experience process"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="container-divider" style={{marginTop:"-1.5em"}}/>
          <div className="our-tech-container">
            <h3 className="text-center">Our Technology</h3>
            <p>
              Here, you will find:
              <ul>
                <li>A means of interacting with out model via image upload</li>
                <li>Instant analytics from our model.</li>
                <li>A way of getting to know us, as a team, our aspirations and challenges</li>
                <li>A reproducible documentation of our project coupled with step by step installation and usage guides.</li>
              </ul>
            </p>
            <div className="img-container">
              <img
                src={about2}
                alt="apimatic code generation engine"
                className="img-responsive"
              />
            </div>
          </div>
          <div className="container-divider" style={{marginTop:"-.1em"}}/>
          <div className="origin-story-container">
            <h3 className="text-center">Why?</h3>
            <p>
            Specifically, we signed up for the Animal Pose estimation category in the ICME Challenge, why? 
              Because we found it fascinating that most research on pose estimation is carried out on humans. 
              Why not animals? Admittedly, it came as a shock to us, at first, when we saw the category fish in the dataset sample provided by the ICME organizers. 
              Fish is a class of the animal kingdom but, the 23 keypoints provided in the train set made us wonder- how many keypoints might the average fish species yield?
            </p>
            <p>
              Join us, therefore, in our journey, from inception to completion as we attempt to curate a winning submission while simultaneously having fun and cherishing every misstep, setback and victory along the way. 
              We will try and make this documentation as plausible, neat and smooth as possible. Feel free to reach out too, if you find something you like, or don't like (pun intended).
            </p>
          </div>
          <div className="container-divider" />
          <div className="today-container">
            <h3 className="text-center">The Future</h3>
            <p>
              AJA version 2.0 might just pave way for us to venture into the action recognition of animals through studying their poses over extended periods of time.
            </p>
            {/* <ul>
              <li>Create and store definitions of their APIs</li>
              <li>Generate SDKs for their APIs for 10 platforms</li>
              <li>Keep these SDKs in sync with API updates</li>
              <li>
                Convert API descriptions into multiple formats (Swagger, API
                Blueprint, RAML etc.)
              </li>
              <li>Generate beautiful documentation for their APIs and SDKs</li>
              <li>Generate complete Developer Experience API Portals</li>
            </ul> */}
          </div>
          <div className="container-divider" />
        </div>
      </div>
    </>


  )
}

export default About