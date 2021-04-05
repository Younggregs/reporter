import React from "react";
import Chart from "react-google-charts";

const options = {
  title: "Report Types Analysis",
  pieHole: 0.4,
  is3D: false
};

const TypeChart = (props) => {
  return <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={
              [
                ["Report Type", "Frequency"],
                ["Positive", parseInt(props.data.positive)],
                ["Negative", parseInt(props.data.negative)]
              ]
            }
            options={options}
        />
};


export default TypeChart