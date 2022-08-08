import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return (
      <h3 className="d-flex justify-content-center text-light py-3">
        No expenses found.
      </h3>
    );
  }

  return (
    <>
      {props.items.map((curElem) => (
        <ExpenseItem
          key={curElem.id}
          title={curElem.title}
          amount={curElem.amount}
          date={curElem.date}
        />
      ))}
    </>
  );
};

export default ExpensesList;
