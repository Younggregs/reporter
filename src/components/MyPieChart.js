import React from "react";
import Chart from "react-google-charts";

/*
const MyPieChart = (props) => {
  return <VictoryPie  
            colorScale={["tomato", "navy", "gold", "cyan",  "orange", "green"]}
            data={[
                { x: "My Reports", y: parseInt(props.data.myReport)},
                { x: "Total Reports", y: parseInt(props.data.totalReport - props.data.myReport)}
            ]}/>;
};
*/

const options = {
  title: "My Reports Aggregate Contriution",
  pieHole: 0.4,
  is3D: false
};

const MyPieChart = (props) => {
  return <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={
              [
                ["Reports", "Frequency"],
                ["My Reports", parseInt(props.data.myReport)],
                ["Total Reports", parseInt(props.data.totalReport - props.data.myReport)]
              ]
            }
            options={options}
        />
};

export default MyPieChart