import React from "react";
import Plot from "react-plotly.js";

const PlotlyChart = ({ data }) => {
  console.log("Bar Data => ", data);
  return (
    <Plot
      data={data}
      layout={{
        width: 410,
        height: 350,
        showlegend: false,
        margin: { t: 5, l: 40 },
      }}
      config={{ responsive: true, displayModeBar: true }}
    />
  );
};

export default PlotlyChart;
