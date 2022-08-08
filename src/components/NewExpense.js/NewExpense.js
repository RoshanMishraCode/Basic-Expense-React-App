import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

const NewExpense = (props) => {
  const [showNotes, setShowNotes] = useState(false);
  const saveExpenseDataHandler = (enterExpenseData) => {
    const expenseData = {
      ...enterExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setShowNotes(false);
  };
  const notesHandlear = () => {
    setShowNotes(true);
  };
  const closeonClickHandler = () => {
    setShowNotes(false);
  };
  return (
    <>
      {!showNotes && (
        <div className="container bg-dark py-4 text-center">
          <button onClick={notesHandlear} className="btn btn-info">
            Add New Expense
          </button>
        </div>
      )}
      {showNotes && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancle={closeonClickHandler}
        />
      )}
    </>
  );
};

export default NewExpense;
