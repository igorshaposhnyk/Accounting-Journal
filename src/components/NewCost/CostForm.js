import React from "react";
import { useState } from "react";
import "./CostForm.style.css";


const CostForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const costData = {
      description: name,
      amount: amount,
      date: new Date(date),
    }
    props.onSaveCostData(costData);
    setName("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Name</label>
          <input type="text" value={name} onChange={nameChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Amount</label>
          <input type="text" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-cost__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            step="2023-02-28"
            onChange={dateChangeHandler}
            value={date}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">
            Costs
          </button>
          <button type="button" onClick={props.onCancelHandler}>
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
