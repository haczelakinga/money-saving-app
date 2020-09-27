import React from "react";
import "../Charts.scss";
import { Pie } from "react-chartjs-2";

const IncomesByCategoryChart = ({ transactions }) => {
  const backgroundColor = {
    Salary: "#E4C9DF",
    Tips: "#CEE1F3",
  };
  const chartData = {
    labels: [],
    datasets: [
      {
        label: "Incomes",
        data: [],
        backgroundColor: [],
        borderWidth: 0,
      },
    ],
  };
  const incomes = transactions.filter(
    (transaction) => transaction.transactionType === "Income"
  );

  for (let transaction of incomes) {
    const transactionCategory = transaction.category;
    if (!chartData.labels.includes(transaction.category)) {
      chartData.labels.push(transaction.category);
      chartData.datasets[0].backgroundColor.push(
        backgroundColor[transactionCategory]
      );

      const sameCategoryTransaction = incomes.filter(
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
      <Pie
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Incomes by category",
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

export default IncomesByCategoryChart;
