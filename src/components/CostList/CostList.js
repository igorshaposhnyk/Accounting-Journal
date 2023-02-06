import React from 'react';
import CostItem from '../CostItem/CostItem';
import './CostList.css'


const CostList = (props) => {
    if(props.filteredCosts.length === 0){
       return <h2 className='cost-list'>This year no shopping</h2>
    }

      return (
        <ul className='cost-list'>
            {props.filteredCosts.map((cost) => (
              <CostItem
              key={cost.id}
              date={cost.date}
              description={cost.description}
              amount={cost.amount}
              />
            ))}
            </ul>
        );
    };


export default CostList;
