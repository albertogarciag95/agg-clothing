import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collection => Object.values(collection)
)

export const selectCollection = urlRouteName => memoize(
  createSelector(
    [selectCollections],
    collections => collections[urlRouteName]
  )
);