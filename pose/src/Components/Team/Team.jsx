import React from "react";
import './Team.css'
import img from '../../Common/Images/about1.png'

const Team = () => {
  return (
    <>
      <div className="teamWrapper">
        <div className="container">
          <h2 className="text-center" style={{marginLeft:"225px"}}>Our Team</h2>
          <p align="center" style={{textAlign:"center", fontWeight:"normal", marginLeft:"-80px"}}>Meet our team members that curated the keypoints algorithm and model that is</p>
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
                    <h3 style={{align:"center", color:"#074e8c"}}>Dr. Ciira Maina</h3>
                  </div>
                  <div className="member-info">
                    <p align="center">
                      Lorem Ipsum is a simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="member-mail">
                    <p align="center">
                        <a href="mailto:@gmail.com">mailto:@gmail.com</a>
                    </p>
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
                    <h3 style={{align:"center", color:"#074e8c"}}>Antony Gitau</h3>
                  </div>
                  <div className="member-info">
                    <p align="center">
                      Lorem Ipsum is a simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="member-mail">
                    <p align="center">
                        <a href="mailto:@gmail.com">mailto:@gmail.com</a>
                    </p>
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
                    <h3 style={{align:"center", color:"#074e8c"}}>Joan Kabura</h3>
                  </div>
                  <div className="member-info">
                    <p align="center">
                      Lorem Ipsum is a simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="member-mail">
                    <p align="center">
                        <a href="mailto:@gmail.com">mailto:@gmail.com</a>
                    </p>
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
                    <h3 style={{align:"center", color:"#074e8c"}}>Austin Kaburia</h3>
                  </div>
                  <div className="member-info">
                    <p align="center">
                      Lorem Ipsum is a simply dummy text of the printing and
                      typesetting industry.
                    </p>
                  </div>
                  <div className="member-mail">
                    <p align="center">
                        <a href="mailto:@gmail.com">mailto:@gmail.com</a>
                    </p>
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