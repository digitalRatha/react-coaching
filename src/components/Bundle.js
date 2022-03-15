import React, { useState } from "react";
import Alert from "./Alert";
import Footer from "./Footer";
import Home from "./Home";
import NavBar from "./NavBar";

export default function Bundle() {
const [alertDataFromHome, setAlertDataFromHome] = useState(null)


const planSelected = (data) =>{
  setAlertDataFromHome(data)
}
  return (
    <div className="container-fluid">
      <NavBar />
      <Alert alertData={alertDataFromHome}/>
      <Home freePlan ={{plan: 15 , name : 'Basic'}} pro={{plan: 25 , name : 'Pro'}} enterprise ={{plan: 30 , name : 'Enterprise'}} selectPlan = {planSelected} />
      <Footer />
    </div>
  );
}
