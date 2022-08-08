import React, { useState } from "react";

const NewExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleChangeHandler = (event) => {
    setUserInput((preState) => {
      return { ...preState, enteredTitle: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((preState) => {
      return { ...preState, enteredAmount: event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((preState) => {
      return { ...preState, enteredDate: event.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: +userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
    props.onSaveExpenseData(expenseData);
  };
  return (
    <div className="container py-4 bg-secondary my-4 rounded">
      <form onSubmit={submitHandler} className="row g-3">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Title
          </label>
          <input
            onChange={titleChangeHandler}
            value={userInput.enteredTitle}
            type="text"
            className="form-control"
            id="title"
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Amount
          </label>
          <input
            min="0.01"
            step="0.01"
            type="number"
            className="form-control"
            id="amount"
            onChange={amountChangeHandler}
            value={userInput.enteredAmount}
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">
            Date
          </label>
          <input
            min="2019-01-01"
            max="2022-12-31"
            type="date"
            className="form-control"
            id="cur-date"
            onChange={dateChangeHandler}
            value={userInput.enteredDate}
            required
          />
        </div>
        <div className="col-12 text-end">
          <button
            onClick={props.onCancle}
            type="button"
            className="btn btn-light me-2 fw-bold"
          >
            Cancle
          </button>
          <button type="submit" className="btn btn-success fw-bold">
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewExpenseForm;
