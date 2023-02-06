import React from "react";
import Diagram from "../Diagram/Diagram";


function CostDiagram(props) {
  const dataSets = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const cost of props.filteredCosts) {
    const costMonth = cost.date.getMonth();
    dataSets[costMonth].value += cost.amount;
  }

  return (
    <div>
      <Diagram dataSets={dataSets} />
    </div>
  );
}

export default CostDiagram;
