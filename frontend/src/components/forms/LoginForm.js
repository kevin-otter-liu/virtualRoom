import classes from './LoginForm.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useRef } from 'react';

const LoginForm = () => {
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const userName = userNameInputRef.current.value;
    const password = passwordInputRef.current.value;

    const data = {
      userName: userName,
      password: password,
    };

    console.log(data);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='username'>Username: </label>
          <input
            type='text'
            required
            id='username'
            ref={userNameInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            required
            id='password'
            ref={userNameInputRef}></input>
        </div>
        <div className={classes.action}>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
      <Button url='/register'>Register here</Button>
    </Card>
  );
};

export default LoginForm;
