import React from "react";

export default function Home({ enterprise, freePlan, pro, selectPlan }) {


  const changePlan = (planDetails) => () => {
    selectPlan(planDetails)
  };
  // function changePlan (planDetails){
  //   console.log(planDetails);
  // }
  return (
    <div>
      <main>
        <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">Pricing</h1>
          <p className="fs-5 text-muted">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{freePlan.name}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ${freePlan.plan}
                  <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  onClick={changePlan(freePlan)}
                  type="button"
                  className="w-100 btn btn-lg btn-outline-primary"
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header py-3">
                <h4 className="my-0 fw-normal">{pro.name}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ${pro.plan}
                  <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-primary"
                  onClick={changePlan(pro)}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm border-primary">
              <div className="card-header py-3 text-white bg-primary border-primary">
                <h4 className="my-0 fw-normal">{enterprise.name}</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  ${enterprise.plan}
                  <small className="text-muted fw-light">/mo</small>
                </h1>
                <ul className="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-primary"
                  onClick={changePlan(enterprise)}
                >
                  Purchase
                </button>
              </div>
            </div>
          </div>
        </div>

        <h2 className="display-6 text-center mb-4">Compare plans</h2>
      </main>
    </div>
  );
}
