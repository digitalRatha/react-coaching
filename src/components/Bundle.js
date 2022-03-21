import React, { useState } from "react";
import Alert from "./Alert";
import Footer from "./Footer";
import Home from "./Home";
import Learnmore from "./Learnmore";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function Bundle() {
  const [alertDataFromHome, setAlertDataFromHome] = useState(null);

  const planSelected = (data) => {
    setAlertDataFromHome(data);
  };
  return (
    <Router>
      <div className="container-fluid">
        <NavBar />
        <Alert alertData={alertDataFromHome} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                freePlan={{ plan: 15, name: "Basic" }}
                pro={{ plan: 25, name: "Pro" }}
                enterprise={{ plan: 30, name: "Enterprise" }}
                selectPlan={planSelected}
              />
            }
          ></Route>
          <Route exact path="/learnmore" element={<Learnmore />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
