import React from "react";
import "./styles/global.scss";
import { HashRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import MainLayout from "./components/MainLayout/MainLayout";
import LoginPage from "./components/LoginPage/LoginPage";
import NotFound from "./components/NotFound/NotFound";
import MoneyManager from "./components/MoneyManager/MoneyManager";
import ChartsPage from "./components/ChartsPage/ChartsPage.js";
import PrivateRoute from "./components/PrivateRoute/PrivateRouteContainer";

function App() {
  return (
    <HashRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/charts" component={ChartsPage} />
          <PrivateRoute path="/moneymanager" component={MoneyManager} />
          <Route path="*" component={NotFound} />
        </Switch>
      </MainLayout>
    </HashRouter>
  );
}

export default App;
