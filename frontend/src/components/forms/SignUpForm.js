import classes from './LoginForm.module.css';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { useRef, useState } from 'react';

const LoginForm = () => {
  const userNameInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmInputRef = useRef();

  const [passwordSame, setPasswordSame] = useState(null);

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

  function onChangeHandler(event) {
    if (
      !passwordConfirmInputRef.current.value ||
      !passwordInputRef.current.value
    ) {
      setPasswordSame(null);
    } else if (
      passwordConfirmInputRef.current.value === passwordInputRef.current.value
    ) {
      setPasswordSame(true);
    } else {
      setPasswordSame(false);
    }
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
        <div className={classes.control} onChange={onChangeHandler}>
          <label htmlFor='password'>Password: </label>
          <input
            type='password'
            required
            id='password'
            ref={passwordInputRef}></input>
        </div>
        <div className={classes.control} onChange={onChangeHandler}>
          <label htmlFor='password-confirm'>Re-enter password: </label>
          <input
            type='password'
            required
            id='password-confirm'
            ref={passwordConfirmInputRef}></input>
        </div>
        {passwordSame === true ? (
          <div>Passwords match!</div>
        ) : passwordSame === false ? (
          <div>Passwords do not match!</div>
        ) : (
          <div></div>
        )}
        <div className={classes.action}>
          <Button type='submit'>Submit</Button>
        </div>
      </form>
      <Button url='/'>Already have an account? Login here</Button>
    </Card>
  );
};

export default LoginForm;
