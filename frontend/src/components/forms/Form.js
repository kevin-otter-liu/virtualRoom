import classes from './Form.module.css';
import Card from '../ui/Card';
import { useRef } from 'react';

const Form = () => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const description = descriptionInputRef.current.value;

    const data = {
      title: title,
      description: description,
    };

    console.log(data);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Form Title</label>
          <input type='text' required id='title' ref={titleInputRef}></input>
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea
            id='description'
            required
            rows='5'
            ref={descriptionInputRef}></textarea>
        </div>
        <div className={classes.action}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
};

export default Form;
