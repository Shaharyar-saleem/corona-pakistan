import React, { useEffect, useState } from "react";
import { fetchDailyData } from "../API";
import { Line } from "react-chartjs-2";
import { Typography } from "@material-ui/core";
import style from './app.module.css';
function Chart() {
  const [countryData, setCountryData] = useState([]);

  useEffect(() => {
    const dailyData = async () => {
      const data = await fetchDailyData();
      const dailyData = data.data.timelineitems[0];
      setCountryData(dailyData);
    };
    dailyData();
  }, []);
  const lineChart = (
    <Line
      data={{
        labels: Object.keys(countryData),
        datasets: [
          {
            data: Object.keys(countryData).map(function (k) {
              return countryData[k].new_daily_cases;
            }),
            label: "Daily New Cases",
            borderColor: "#05acff",
            backgroundColor: "rgba(5, 172, 255, 0.45)",
            fill: true,
          },
          {
            data: Object.keys(countryData).map(function (k) {
              return countryData[k].total_cases;
            }),
            label: "Total Cases",
            borderColor: "#180a80c9",
            fill: true,
          },
          {
            data: Object.keys(countryData).map(function (k) {
              return countryData[k].total_deaths;
            }),
            label: "Total Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
          {
            data: Object.keys(countryData).map(function (k) {
              return countryData[k].total_recoveries;
            }),
            label: "Total Recoveries",
            borderColor: "#138400",
            backgroundColor: "#13840091",
            fill: true,
          },
          {
            data: Object.keys(countryData).map(function (k) {
              return countryData[k].new_daily_deaths;
            }),
            label: "New Daily Deaths",
            borderColor: "#ff5601e0",
            backgroundColor: "#ff5601ad",
            fill: true,
          },
        ],
      }}
    />
  );

  return (
    <div>
      <Typography variant="h5" component="h5" className={style.mainText} m={5}>
          PAKISTAN'S Covid-19 Situation
      </Typography>
      {lineChart}
    </div>
  );
}

export default Chart;
