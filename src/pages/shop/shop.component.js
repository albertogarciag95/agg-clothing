import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fecthCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/colletions.overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fecthCollectionsStartAsync } = this.props;
    fecthCollectionsStartAsync();
  }

  render() {
    const { match, isCollectionsLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          render={props => <CollectionsOverviewWithSpinner isLoading={!isCollectionsLoaded} {...props} />} 
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />} 
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  isCollectionsLoaded: selectIsCollectionsLoaded
});

const mapDispatchToProps = dispatch => ({
  fecthCollectionsStartAsync: () => fecthCollectionsStartAsync()(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);