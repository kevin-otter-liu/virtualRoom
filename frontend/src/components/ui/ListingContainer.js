import Listing from './Listing';
import { Fragment, useState } from 'react';
import classes from './ListingContainer.module.css';

const dummyData = [
  {
    id: 1,
    imageUrl: 'https://www.computerhope.com/jargon/o/open-source.jpg',
    altText: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'Lorem ipsum dolor sit amet, consectetur',
  },
  {
    id: 2,
    imageUrl: 'https://www.computerhope.com/jargon/o/open-source.jpg',
    altText: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    text: 'Lorem ipsum dolor sit amet',
  },
];

const ListingContainer = () => {
  const [listings, setListings] = useState(dummyData);
  // fetch dummy data here
  return (
    <div className={classes.container}>
      <ul>
        {listings.length != 0
          ? listings.map((listing) => (
              <li key={listing.id}>
                <Listing imageUrl={listing.imageUrl} altText={listing.altText}>
                  {listing.text}
                </Listing>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

export default ListingContainer;
