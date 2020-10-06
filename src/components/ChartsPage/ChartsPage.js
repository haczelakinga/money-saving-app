import React from "react";
import TransactionsByCategoryChart from "../Charts/TransactionsByCategoryChart/TransactionsByCategoryChartContainer";
import TransactionsPerDayChart from "../Charts/TransactionsPerDayChart/TransactionsPerDayChartContainer";
import TransactionsPerMonthChart from "../Charts/TransactionsPerMonth/TransactionsPerMonthChartContainer";

const ChartsPage = () => {
  return (
    <div className="charts-container">
      <h1 className="statistics-title">Statistics</h1>
      <div className="flex-container">
        <TransactionsByCategoryChart type='Outcome' title='Spends by category'/>
        <TransactionsByCategoryChart type='Income' title='Incomes by category'/>
        <TransactionsPerDayChart />
        <TransactionsPerMonthChart />
      </div>
    </div>
  );
};
export default ChartsPage;
