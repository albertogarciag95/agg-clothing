import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
  FETCH_COLLECTIONS_START 
} from './shop.action.types';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = error => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: error
})

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
  payload: null
})

export const fecthCollectionsStartAsync = () => {
  return dispatch => {
    
  }
}