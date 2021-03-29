import { compose } from 'react'; // allows us to declare a high order component with more than one wrapped level
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoading } from '../../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsLoading
});

const CollectionsContainer = ComponentWrapped => connect(mapStateToProps)(WithSpinner(ComponentWrapped));

export default CollectionsContainer;