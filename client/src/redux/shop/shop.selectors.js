import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => collections ? Object.values(collections) : []
)

export const selectCollection = collectionUrlParam => memoize(
  createSelector(
    [selectCollections],
    collections => collections ? collections[collectionUrlParam] : null
  )
);

export const selectIsCollectionsLoading = createSelector(
  [selectShop],
  shop => !shop.collections
);