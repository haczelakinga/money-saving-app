import React from "react";
import "../Charts.scss";
import { Doughnut } from "react-chartjs-2";

const SpendsByCategoryChart = ({ transactions }) => {
  const backgroundColor = {
    Car: "#88878f",
    Food: "#C8D08B",
    School: "#105b94",
    Clothes: "#E3A0C3",
    Hobby: "#F2CB92",
    Bills: "#FC534A",
  };
  const chartData = {
    labels: [],
    datasets: [
      {
        label: "Spends",
        data: [],
        backgroundColor: [],
      },
    ],
  };
  const spends = transactions.filter(
    (transaction) => transaction.transactionType === "Outcome"
  );

  for (let transaction of spends) {
    const transactionCategory = transaction.category;
    if (!chartData.labels.includes(transaction.category)) {
      chartData.labels.push(transaction.category);
      chartData.datasets[0].backgroundColor.push(
        backgroundColor[transactionCategory]
      );

      const sameCategoryTransaction = spends.filter(
        (transaction) => transaction.category === transactionCategory
      );
      let price = null;
      for (let singleTransaction of sameCategoryTransaction) {
        price += parseFloat(singleTransaction.amount);
      }
      chartData.datasets[0].data.push(price);
    }
  }

  return (
    <div className="container">
      <Doughnut
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Spends by category",
            fontSize: 25,
          },
          legend: {
            display: true,
            position: "bottom",
          },
          responsive: true,
        }}
      />
    </div>
  );
};

export default SpendsByCategoryChart;
