import React, { useState } from 'react';
import Navbar from '../../Common/Navbar/Navbar.jsx';
import '../../Components/Landing/Landing.css'
import Home from '../Home/Home.jsx';
import Team from '../Team/Team.jsx';
import About from '../About/About.jsx';
import Documentation from '../Documentation/Documentation.jsx';

const Landing = () => {
  const [isSelected, setIsSelected] = useState("home")

  const handleSelected = (name) => {
    setIsSelected(name)
  }
  return (
    <div>
      <Navbar isSelected={isSelected} handleSelected={handleSelected} />
      {isSelected === 'home' && (
        <Home/>
      )}
      {isSelected === 'team' && (<Team/>)}
      {isSelected === 'projects' && <About/>}
      {isSelected === 'documentation' && <Documentation/>}

    </div>
  )
}

export default Landing