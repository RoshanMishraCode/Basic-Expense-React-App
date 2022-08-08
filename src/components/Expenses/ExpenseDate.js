import React from "react";
import Card from "../UI/Card";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <>
      <Card className="row text-center fw-bold text-light bg-dark mx-4 fs-5">
        <div>{month}</div>
        <div className="fs-6">{year}</div>
        <div>{day}</div>
      </Card>
    </>
  );
};

export default ExpenseDate;
