import { Link } from 'react-router-dom';

import classes from './MainNavigationBar.module.css';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Navigation Bar</div>
      <ul>
        <li>
          <Link to='/'>Main Page</Link>
        </li>
        <li>
          <Link to='/next-page'>Next Page</Link>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
