import { Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';

// components
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import ListingsPage from './pages/ListingsPage';

import MainNavigationBar from './components/layout/MainNavigationBar';

function App() {
  return (
    <Fragment>
      <MainNavigationBar />
      <Switch>
        <Route path='/' exact>
          <LoginPage />
        </Route>
        <Route path='/register' exact>
          <SignUpPage />
        </Route>
        <Route path='/listings' exact>
          <ListingsPage />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
