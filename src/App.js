import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense.js/NewExpense";
const Dummy_expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 2, 14),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 4, 28),
  },
  {
    id: "e3",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
  {
    id: "e4",
    title: "New Tv",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(Dummy_expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((preState) => {
      return [expense, ...preState];
    });
  };
  return (
    <>
      <h1 className="text-center">Add Expenses!</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
