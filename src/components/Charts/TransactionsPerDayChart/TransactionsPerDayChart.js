import React from "react";
import { Bar } from "react-chartjs-2";

const TransactionsPerDayChart = ({ transactions }) => {
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

  for (let transaction of transactions) {
    let date = transaction.date.slice(0, -14);

    if (!chartData.labels.includes(date)) {
      chartData.labels.push(date);

      let sameDateTransactions = transactions.filter(
        (transaction) => transaction.date.slice(0, -14) === date
      );

      let incomeAmount = 0;
      let outcomeAmount = 0;
      for (let transaction of sameDateTransactions) {
        if (transaction.transactionType === "Income") {
          incomeAmount += parseFloat(transaction.amount);
        } else if (transaction.transactionType === "Outcome") {
          outcomeAmount += parseFloat(transaction.amount);
        }
      }
      chartData.datasets[0].data.push(outcomeAmount);
      chartData.datasets[1].data.push(incomeAmount);
    }
  }
  return (
    <div className="container">
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: "All transactions",
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

export default TransactionsPerDayChart;
