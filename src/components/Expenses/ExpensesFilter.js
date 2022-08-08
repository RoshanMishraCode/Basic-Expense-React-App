import React from "react";

const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="container bg-dark">
      <div className="row">
        <div className="col-12 d-flex justify-content-between py-3 px-5">
          <label className="text-end fs-5 text-light fw-bold py-2">
            Filter by year
          </label>
          <select
            className="form-select form-select-lg mb-3 w-auto"
            aria-label=".form-select-lg example"
            value={props.selected}
            onChange={dropdownChangeHandler}
          >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
