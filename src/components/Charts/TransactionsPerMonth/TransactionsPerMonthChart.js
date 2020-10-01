import React from "react";
import { Bar } from "react-chartjs-2";
import "../Charts.scss";

const TransactionsPerMonthChart = ({ transactions }) => {
  const chartData = {
    labels: [],
    datasets: [
      {
        label: "Spends",
        data: [],
        backgroundColor: "#F39A9D",
        maxBarThickness: "70",
      },
      {
        label: "Incomes",
        data: [],
        backgroundColor: "#CEE1F3",
        maxBarThickness: "70",
      },
    ],
  };

  const currentYear = new Date().getFullYear();

  let currentYearTransactions = transactions.filter(
    (transaction) => transaction.date.slice(0, -20) == currentYear
  );

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  for (let i = 0; i <= 11; i++) {
    let spends = 0;
    let incomes = 0;
    const sameMonthSpends = currentYearTransactions.filter(
      (transaction) =>
        new Date(transaction.date).getMonth() === i &&
        transaction.transactionType === "Outcome"
    );
    const sameMonthIncomes = currentYearTransactions.filter(
      (transaction) =>
        new Date(transaction.date).getMonth() === i &&
        transaction.transactionType === "Income"
    );
    for (let transaction of sameMonthIncomes) {
      incomes += parseFloat(transaction.amount);
    }

    for (let transaction of sameMonthSpends) {
      spends += parseFloat(transaction.amount);
    }
    chartData.labels.push(months[i]);
    chartData.datasets[1].data.push(spends);
    chartData.datasets[0].data.push(incomes);
  }

  return (
    <div className="container">
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "Transactions Per Month",
            fontStyle: "italic",
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

export default TransactionsPerMonthChart;
