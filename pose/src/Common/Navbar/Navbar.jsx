import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../Common/Images/aja.png';
import { ChatbubblesOutline, SearchOutline, SettingsOutline } from 'react-ionicons';
import { HomeOutline } from 'react-ionicons';
import { FolderOpenOutline } from 'react-ionicons';
import { PieChartOutline } from 'react-ionicons';
import { PeopleOutline } from 'react-ionicons';

const Navbar = ({ isSelected, handleSelected }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav id="navbar" onMouseEnter={() => setSidebarOpen(true)} onMouseLeave={() => setSidebarOpen(false)}>
                <ul className="navbar-items flexbox-col">
                    <li className="navbar-logo flexbox-left">
                        <a className="navbar-item-inner flexbox">
                            <img className="logo" src={logo} alt="Logo"></img>
                        </a>
                    </li>
                    <li className={`navbar-item flexbox-left ${isSelected && isSelected === "home" ? "selected" : ""}`} onClick={() => handleSelected("home")} style={{ marginTop: "40px" }}>
                        <a className="navbar-item-inner flexbox-left" href="#home">
                            <div className="navbar-item-inner-icon-wrapper flexbox">
                                <HomeOutline
                                    style={{ color: '#fff' }}
                                    height="20px"
                                    width="20px"
                                />
                            </div>
                            <span className="link-text">Home</span>
                        </a>
                    </li>
                    <li className={`navbar-item flexbox-left ${isSelected && isSelected === "projects" ? "selected" : ""}`} onClick={() => handleSelected("projects")}>
                        <a className="navbar-item-inner flexbox-left" href='#about'>
                            <div className="navbar-item-inner-icon-wrapper flexbox">
                                <FolderOpenOutline
                                    style={{ color: '#fff' }}
                                    height="20px"
                                    width="20px"
                                />
                            </div>
                            <span className="link-text">About</span>
                        </a>
                    </li>
                    <li className={`navbar-item flexbox-left ${isSelected && isSelected === "documentation" ? "selected" : ""}`} style={{ display: "flex", flexDirection: "column" }}>
                        <a className="navbar-item-inner flexbox-left" href="#documentation" onClick={() => handleSelected("documentation")}>
                            <div className="navbar-item-inner-icon-wrapper flexbox">
                                <PieChartOutline
                                    style={{ color: '#fff' }}
                                    height="20px"
                                    width="20px"
                                />
                            </div>
                            <span className="link-text">Documentation</span>
                        </a>
                        <ul className="navbar-submenu" style={{ textDecoration: "none", listStyle: "none", color: "white", display: "flex", flexDirection: "column", gap: "20px" }}>
                            <li className={`navbar-submenu-item ${isSelected && isSelected === "documentation" ? "selected" : ""}`}>
                                <a className="navbar-submenu-item-inner" href="#Introduction" onClick={() => handleSelected("documentation-subitem1")}>
                                    Overview
                                </a>
                            </li>
                            <li className={`navbar-submenu-item ${isSelected && isSelected === "documentation" ? "selected" : ""}`}>
                                <a className="navbar-submenu-item-inner" href="#What_you_should_already_know" onClick={() => handleSelected("documentation-subitem2")}>
                                    Introduction
                                </a>
                            </li>
                            <li className={`navbar-submenu-item ${isSelected && isSelected === "documentation" ? "selected" : ""}`}>
                                <a className="navbar-submenu-item-inner" href="#References" onClick={() => handleSelected("documentation-subitem3")}>
                                    References
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li className={`navbar-item flexbox-left ${isSelected && isSelected === "team" ? "selected" : ""}`} onClick={() => handleSelected("team")}>
                        <a className="navbar-item-inner flexbox-left" href='#team'>
                            <div className="navbar-item-inner-icon-wrapper flexbox">
                                <PeopleOutline
                                    style={{ color: '#fff' }}
                                    height="20px"
                                    width="20px"
                                />
                            </div>
                            <span className="link-text">The Team</span>
                        </a>
                    </li>
                    <li className={`navbar-item flexbox-left ${isSelected && isSelected === "support" ? "selected" : ""}`} onClick={() => handleSelected("support")}>
                        <a className="navbar-item-inner flexbox-left" href='#support'>
                            <div className="navbar-item-inner-icon-wrapper flexbox">
                                <ChatbubblesOutline
                                    style={{ color: '#fff' }}
                                    height="20px"
                                    width="20px"
                                />
                            </div>
                            <span className="link-text">Support</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
