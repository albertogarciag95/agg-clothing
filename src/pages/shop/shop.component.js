import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fecthCollectionsStartAsync } from '../../redux/shop/shop.actions';

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/colletions.overview.component';
import CollectionsContainer from '../../components/high-order-components/collection-container/collections.container';

const CollectionsOverviewContainer = CollectionsContainer(CollectionsOverview);
const CollectionPageContainer = CollectionsContainer(CollectionPage);

class ShopPage extends React.Component {

  componentDidMount() {
    const { fecthCollectionsStartAsync } = this.props;
    fecthCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="shop-page">
        <Route 
          exact 
          path={`${match.path}`} 
          component={CollectionsOverviewContainer}
        />
        <Route 
          path={`${match.path}/:collectionId`} 
          component={CollectionPageContainer} 
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fecthCollectionsStartAsync: () => fecthCollectionsStartAsync()(dispatch)
});

export default connect(null, mapDispatchToProps)(ShopPage);