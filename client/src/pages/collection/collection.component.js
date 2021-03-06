import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/collection-item/collection-item.component';
import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  // useEffect(() => {
  //   return () => { // if useEffect returns a function, it will execute when the component unmounts

  //   }
  // })
  const { title, items } = collection;
  return (
    <div className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  collection: selectCollection(props.match.params.collectionId)(state)
  //this is necessary because the selector itself does not recieve and does not depend on the entire state

  //the createSelector() function, is a curried function (returns another function) that
  //returns a function with the state given as a parameter 
});

export default connect(mapStateToProps)(CollectionPage);
