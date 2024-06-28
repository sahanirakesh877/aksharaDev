import React from "react";
import CountUp from "react-countup";
import counter from "../Data/CounterData";

const Counter = () => {
  return (
    <div className="container py-4">
      <div className="row ">
        {counter &&
          counter.map((count) => (
            <div
              className={`col-md-3 col-sm-6 counter ${count.name.toLowerCase()}`}
              key={count.id}
            >
              <div className="counter-content">
                <div className="counter-icon">
                  <i className={count.icon} />
                </div>
                <h3>{count.name}</h3>
              </div>
              <span className="counter-value">
                <CountUp end={count.counterNo} duration={2.5} />+
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Counter;
