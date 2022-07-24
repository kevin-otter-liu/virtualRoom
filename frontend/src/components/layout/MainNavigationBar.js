import { Link } from 'react-router-dom';
import { useState } from 'react';
import classes from './MainNavigationBar.module.css';

const defaultNavBarItems = [
  { id: 1, url: '/about', label: 'About us' },
  { id: 2, url: '/contact-us', label: 'Contact us' },
];

const MainNavigation = () => {
  const [navBarItems, setNavBarItems] = useState(defaultNavBarItems);

  return (
    <header className={classes.header}>
      <a href='/' className={classes.logo}>
        Virtual Room
      </a>
      <ul>
        {navBarItems &&
          navBarItems.map((navBarItem) => {
            return (
              <li key={navBarItem.id}>
                <Link to={navBarItem.url}>{navBarItem.label}</Link>
              </li>
            );
          })}
      </ul>
    </header>
  );
};

export default MainNavigation;
