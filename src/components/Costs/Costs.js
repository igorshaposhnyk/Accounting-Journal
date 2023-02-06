import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
import CostDiagram from "../CostDiagram/CostDiagram";
import CostList from "../CostList/CostList";
import CostsFilter from "../CostsFilter/CostsFilter";
import "./style.css";


const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

const filteredCosts = props.costs.filter(cost => {
  return cost.date.getFullYear().toString() === selectedYear;
})

  return (
    <div>
      <Card className="costs">
        <CostsFilter
          selectedYear={selectedYear}
          yearChangeHandler={yearChangeHandler}
        />
        <CostDiagram filteredCosts={filteredCosts} />
       <CostList filteredCosts={filteredCosts}/>
      </Card>
    </div>
  );
};

export default Costs;
