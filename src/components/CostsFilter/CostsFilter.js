import React from "react";
import "./CostsFilter.css";


const CostsFilter = (props) => {
  const yearChangeHandler = (e) => {
    props.yearChangeHandler(e.target.value);
  };

  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <label>Choose a year</label>
        <select
          onSubmit={yearChangeHandler}
          value={props.selectedYear}
          onChange={yearChangeHandler}
        >
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
        </select>
      </div>
    </div>
  );
};

export default CostsFilter;
