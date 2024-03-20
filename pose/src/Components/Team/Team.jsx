import React from "react";
import './Team.css'
import img from '../../Common/Images/about1.png'

const Team = () => {
    return(
<>
  <div className="teamWrapper">
    <div className="container">
      <h1 align="center">Our Team</h1>
      <p align="center">Something about our team</p>
      <div className="teamGrid">
        <div className="colmun">
          <div className="teamcol">
            <div className="teamcolinner">
              <div className="avatar">
                <img
                  src={img}
                  alt="Member"
                />
              </div>
              <div className="member-name">
                {" "}
                <h2 align="center">Antony Gitau</h2>{" "}
              </div>
              <div className="member-info">
                <p align="center">
                  Lorem Ipsum is a simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="member-mail">
                {" "}
                <p align="center">
                  {" "}
                  <a href="mailto:@gmail.com">mailto:@gmail.com</a>{" "}
                </p>{" "}
              </div>
              <div className="member-social">
                <ul className="social-listing">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="colmun">
          <div className="teamcol">
            <div className="teamcolinner">
              <div className="avatar">
                <img
                  src={img}
                  alt="Member"
                />
              </div>
              <div className="member-name">
                {" "}
                <h2 align="center">Joan Kabura</h2>{" "}
              </div>
              <div className="member-info">
                <p align="center">
                  Lorem Ipsum is a simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="member-mail">
                {" "}
                <p align="center">
                  {" "}
                  <a href="mailto:@gmail.com">mailto:@gmail.com</a>{" "}
                </p>{" "}
              </div>
              <div className="member-social">
                <ul className="social-listing">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="colmun">
          <div className="teamcol">
            <div className="teamcolinner">
              <div className="avatar">
                <img
                  src={img}
                  alt="Member"
                />
              </div>
              <div className="member-name">
                {" "}
                <h2 align="center">Austin Kaburia</h2>{" "}
              </div>
              <div className="member-info">
                <p align="center">
                  Lorem Ipsum is a simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
              <div className="member-mail">
                {" "}
                <p align="center">
                  {" "}
                  <a href="mailto:@gmail.com">mailto:@gmail.com</a>{" "}
                </p>{" "}
              </div>
              <div className="member-social">
                <ul className="social-listing">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    )
}

export default Team