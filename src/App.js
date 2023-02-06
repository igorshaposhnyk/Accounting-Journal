import React from "react";
import { useState } from "react";
import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";


const initialCosts = [
  {
    id: "c1",
    date: new Date(2021, 1, 28),
    description: "Apple-watch",
    amount: 99.99,
  },
  {
    id: "c2",
    date: new Date(2021, 10, 18),
    description: "Mac-book",
    amount: 2999.99,
  },
  {
    id: "c3",
    date: new Date(2022, 6, 10),
    description: "Iphone",
    amount: 599.99,
  },
];

const App = () => {
 const [costs, setCosts] = useState(initialCosts);

  const addCostHandler = (cost) => {
  setCosts((prevCost) => {
  return [cost, ...prevCost];
});
};


  return (
    <div>
      <NewCost addCostHandler={addCostHandler}/>
      <Costs costs={costs} />
    </div>
  );
};

export default App;
