import Card from './Card';
import classes from './Button.module.css';
import { Fragment } from 'react';
const Button = (props) => {
  return (
    <Fragment>
      <a href={props.url}>
        <button type={props.type} className={classes.button}>
          {props.children}
        </button>
      </a>
    </Fragment>
  );
};

export default Button;
