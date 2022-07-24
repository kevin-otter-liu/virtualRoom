import classes from './Image.module.css';

const Image = (props) => {
  return (
    <a href={props.redirectUrl || '#'} className={classes.image}>
      <img src={props.imageUrl} alt={props.altText} />
    </a>
  );
};

export default Image;
