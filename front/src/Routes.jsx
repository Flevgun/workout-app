import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/pages/Auth/Auth";

import Home from "./components/pages/Home/Home";
import NewWorkout from "./components/pages/NewWorkout/NewWorkout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}> </Route>
        <Route path="/new-workout" element={<NewWorkout />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
