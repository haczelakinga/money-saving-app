import React from "react";
import SpendsByCategoryChart from "../Charts/SpendsByCategoryChart/SpendsByCategoryChartContainer";
import IncomesByCategory from "../Charts/IncomesByCategory/IncomesByCategoryContainer";
const ChartsPage = () => {
  return (
    <div className="flex-container">
      <SpendsByCategoryChart />
      <IncomesByCategory />
    </div>
  );
};
export default ChartsPage;
