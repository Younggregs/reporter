import React from "react";
import Chart from "react-google-charts";

const options = {
  title: "Incident Category Analysis",
  pieHole: 0.4,
  is3D: false
};

const LocationChart = (props) => {

   var data = [["Incident Category", "Frequency"]]
   for(var item in props.data){
        var buffer = [props.data[item].name, parseInt(props.data[item].value)]

        data.push(buffer)
   }

  return <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
};


export default LocationChart