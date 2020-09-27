import React from "react";
import "./styles/global.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";
import LandingPage from "./components/LandingPage/LandingPage";
import MainLayout from "./components/MainLayout/MainLayout";
import LoginPage from "./components/LoginPage/LoginPage";
import NotFound from "./components/NotFound/NotFound";
import MoneyManager from "./components/MoneyManager/MoneyManager";
import ChartsPage from "./components/ChartsPage/ChartsPage.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRouteContainer";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/charts" component={ChartsPage} />
          <PrivateRoute path="/moneymanager" component={MoneyManager} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
