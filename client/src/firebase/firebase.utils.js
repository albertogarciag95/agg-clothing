import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyDCIgnBaffZNmYaMXWRJFdpBMwjG8QDIKk",
  authDomain: "agg-clothing.firebaseapp.com",
  projectId: "agg-clothing",
  storageBucket: "agg-clothing.appspot.com",
  messagingSenderId: "938665794925",
  appId: "1:938665794925:web:5371133e9209a40ef84e64",
  measurementId: "G-771D52W9LT"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, options) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const userSnapshot = await userRef.get();

  if(!userSnapshot.exists) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...options });
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(document => {
    const { title, items } = document.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: document.id,
      title, 
      items
    }
  });

  return transformedCollection.reduce((accumulator, collection) => 
    ({...accumulator, [collection.title.toLowerCase()]: collection  })
  , {});
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
