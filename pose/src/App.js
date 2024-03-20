import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Landing from "./Components/Landing/Landing";
import MainLanding from "./Components/Landing/MainLanding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<MainLanding/>}/>
          <Route path="/home" element={<Landing/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
