import React from "react";
import { VictoryPie } from "victory";

const MyPieChart = (props) => {
  return <VictoryPie  
            colorScale={["tomato", "navy", "gold", "cyan",  "orange", "green"]}
            data={[
                { x: "My Reports", y: parseInt(props.data.myReport)},
                { x: "Total Reports", y: parseInt(props.data.totalReport - props.data.myReport)}
            ]}/>;
};

export default MyPieChart