import React from "react";
import SpendsByCategoryChart from "../Charts/SpendsByCategoryChart/SpendsByCategoryChartContainer";
import IncomesByCategory from "../Charts/IncomesByCategory/IncomesByCategoryContainer";
import TransactionsPerDayChart from "../Charts/TransactionsPerDayChart/TransactionsPerDayChartContainer";

const ChartsPage = () => {
  return (
    <div>
      <div className="flex-container">
        <SpendsByCategoryChart />
        <IncomesByCategory />
      </div>
      <TransactionsPerDayChart />
    </div>
  );
};
export default ChartsPage;
