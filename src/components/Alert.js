import React from "react";

export default function Alert({alertData}) {

  return (
    alertData && <div>
      <div className="alert alert-success" role="alert">
       Thanx for choosing <strong>{alertData.name}</strong> plan worth <strong>${alertData.plan} </strong>
      </div>
    </div>
  );
}
