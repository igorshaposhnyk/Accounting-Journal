import React from 'react'
import { useState } from 'react'
import CostForm from './CostForm'
import  './NewCost.style.css'


const NewCost = (props) => {
  const[isOpen, setIsOpen] = useState(false);

  const onSaveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    }
    props.addCostHandler(costData);
    setIsOpen(false);
  };

  const inputCostDateHandler = () => {
    setIsOpen(true)
  }

  const onCancelHandler = () => {
    setIsOpen(false)
  }

  return (
    <div className='new-cost'>
      {!isOpen &&
      <button onClick={inputCostDateHandler}>Add cost</button>}
      {isOpen &&
        <CostForm onSaveCostData={onSaveCostDataHandler}
        onCancelHandler={onCancelHandler}
       />}
    </div>
  )
}

export default NewCost
