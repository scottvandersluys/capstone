import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from 'firebase/auth';
import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgKw9uYds7tWuMqzhXCN3v3O3v09mRJDY",
  authDomain: "capstone-db-d3535.firebaseapp.com",
  projectId: "capstone-db-d3535",
  storageBucket: "capstone-db-d3535.appspot.com",
  messagingSenderId: "912389005150",
  appId: "1:912389005150:web:418881402e1906baf0b9cf"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocument = async (user) => {
  const { uid } = user;
  const userDocRef = doc(db, "users", uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        createdAt,
        displayName,
        email
      })
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  return userDocRef;
};
