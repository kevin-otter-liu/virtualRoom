import Card from './Card';
import Image from './Image';
import classes from './Listing.module.css';

const Listing = (props) => {
  return (
    <Card>
      <div className={classes.container}>
        <Image imageUrl={props.imageUrl} alt={props.altText} />
        <div className={classes.text}>
          <h1>{props.children}</h1>
        </div>
      </div>
    </Card>
  );
};

export default Listing;
