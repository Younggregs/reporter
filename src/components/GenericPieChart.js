import React from "react";
import { VictoryPie } from "victory";

const GenericPieChart = (props) => {

   var bucket = []
   for(var item in props.data){
        var buffer = {x: props.data[item].name, y: parseInt(props.data[item].value)}

        bucket.push(buffer)
   }

  return <VictoryPie  
            colorScale={["tomato", "navy", "gold", "cyan",  "orange", "green"]}
            data={bucket}/>;
};

export default GenericPieChart