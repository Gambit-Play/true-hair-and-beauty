import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

/* ================================================================ */
/*  Initializing Firebase Process                                   */
/* ================================================================ */

/* Development Firebase Project */
const devConfig = {
	apiKey: process.env.REACT_APP_DEV_API_KEY,
	authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
	projectId: process.env.REACT_APP_DEV_PROJECT_ID,
	storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_DEV_APP_ID,
	measurementId: process.env.REACT_APP_DEV_MEASUREMENT_ID,
};

/* Production Firebase Project */
const prodConfig = {
	apiKey: process.env.REACT_APP_PROD_API_KEY,
	authDomain: process.env.REACT_APP_PROD_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_PROD_DATABASE_URL,
	projectId: process.env.REACT_APP_PROD_PROJECT_ID,
	storageBucket: process.env.REACT_APP_PROD_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_PROD_APP_ID,
	measurementId: process.env.REACT_APP_PROD_MEASUREMENT_ID,
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

firebase.initializeApp(config);

/* ================================================================ */
/*  Firebase Actions                                                */
/* ================================================================ */

export const createCollectionAndDocuments = async (collectionId, documents) => {
	const collectionRef = firestore.collection(collectionId);
	const batch = firestore.batch();

	documents.forEach(doc => {
		const newDocumentRef = collectionRef.doc();

		batch.set(newDocumentRef, { id: newDocumentRef.id, ...doc });
	});

	return await batch.commit();
};

export const getCollection = async collectionId => {
	if (!collectionId) console.error('There is no "collectionId"');

	const collectionRef = firestore.collection(collectionId);

	return collectionRef;
};

/* ================================================================ */
/*  Firestore & Auth                                                */
/* ================================================================ */

export const firestore = firebase.firestore();
export const auth = firebase.auth();

/* ================================================================ */
/*  Firebase Auth Providers                                         */
/* ================================================================ */

export const signOutFromAuth = () => auth.signOut();

/* ================================================================ */
/*  Export Default                                         			*/
/* ================================================================ */

export default firebase;
