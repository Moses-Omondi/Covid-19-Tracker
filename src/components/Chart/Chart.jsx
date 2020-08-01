import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setdailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setdailyData(await fetchDailyData());
    };

    fetchApi();
  }, []);

  const lineChart = dailyData.length  !== 0 ? (
    <Line
      data={{
        labels: dailyData.map(({date}) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Dead",
            borderColor: "rgba(255,0,0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
      <div className={styles.container}>
          {lineChart}
      </div>
  )
};

export default Chart;
