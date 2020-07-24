import React from 'react';
import './styles/global.scss';
import {BrowserRouter, Route} from 'react-router-dom';
import {Switch} from 'react-router';
import LandingPage from './components/LandingPage/LandingPage';
import MainLayout from './components/MainLayout/MainLayout';
import LoginPage from './components/LoginPage/LoginPage';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={LandingPage}></Route>
          <Route exact path='/login' component={LoginPage}></Route>
          <Route path='*' component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
