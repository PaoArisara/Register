
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import Signup from "./pages/Signup";
import Information from "./pages/Information";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Signin" element={<SignIn />} />

        <Route path="/Information" element={<Information />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
