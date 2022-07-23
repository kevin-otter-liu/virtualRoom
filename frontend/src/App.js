import { Route, Switch } from 'react-router-dom';

// components
import MainPage from './pages/MainPage';
import NextPage from './pages/NextPage';
import MainNavigationBar from './components/layout/MainNavigationBar';

function App() {
  return (
    <div>
      <MainNavigationBar />
      <Switch>
        <Route path='/' exact>
          <MainPage />
        </Route>
        <Route path='/next-page' exact>
          <NextPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
