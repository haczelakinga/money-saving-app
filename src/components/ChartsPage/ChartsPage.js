import React from "react";
import SpendsByCategoryChart from "../Charts/SpendsByCategoryChart/SpendsByCategoryChartContainer";
import IncomesByCategory from "../Charts/IncomesByCategory/IncomesByCategoryContainer";
import TransactionsPerDayChart from "../Charts/TransactionsPerDayChart/TransactionsPerDayChartContainer";
import TransactionsPerMonthChart from "../Charts/TransactionsPerMonth/TransactionsPerMonthChartContainer";

const ChartsPage = () => {
  return (
    <div className="charts-container">
      <h1 className="statistics-title">Statistics</h1>
      <div className="flex-container">
        <SpendsByCategoryChart />
        <IncomesByCategory />
        <TransactionsPerDayChart />
        <TransactionsPerMonthChart />
      </div>
    </div>
  );
};
export default ChartsPage;
