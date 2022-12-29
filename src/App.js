import Auth from "./Components/Auth/Auth";
import Cards from "./Components/About/Cards";
import ProfileUpdate from './Components/ProfileUpdate/ProfileUpdate'
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/auth" element={<Auth />}></Route>
          <Route exact path="/about" element={<Cards />}></Route>
          <Route exact path="/me/update" element={<ProfileUpdate />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
