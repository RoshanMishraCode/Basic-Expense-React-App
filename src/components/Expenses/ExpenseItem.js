import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <>
      <div className="container bg-dark py-3 px-5 rounded">
        <Card className="row bg-secondary p-3 d-flex align-items-center">
          <div className="col-md-4">
            <ExpenseDate date={props.date} />
          </div>
          <div className="col-md-4 text-light fs-5 fw-bold">{props.title}</div>
          <div className="col-md-4 d-flex justify-content-end">
            <button className="btn btn-info me-2">${props.amount}</button>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ExpenseItem;
