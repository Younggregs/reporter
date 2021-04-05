import React from "react";
import { VictoryPie } from "victory";

const PieChart = (props) => {
  return <VictoryPie  
            colorScale={["tomato", "navy", "gold", "cyan",  "orange", "green"]}
            data={[
                { x: "Positive", y: parseInt(props.data.positive)},
                { x: "Negative", y: parseInt(props.data.negative)}
            ]}/>;
};

export default PieChart