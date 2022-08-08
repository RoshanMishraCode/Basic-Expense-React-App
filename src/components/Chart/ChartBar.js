import React from "react";

const ChartBar = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="col-1 flex-column">
      <div
        className="bg-secondary d-flex align-items-end"
        style={{ height: "10vh" }}
      >
        <div className="bg-info w-100" style={{ height: barFillHeight }}></div>
      </div>
      <div className="fw-bold">{props.label}</div>
    </div>
  );
};

export default ChartBar;
