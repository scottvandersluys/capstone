import { initializeApp } from 'firebase/app';
import { 
  createUserWithEmailAndPassword, 
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut,
  GoogleAuthProvider
} from 'firebase/auth';
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

export const createUserDocument = async (user, additionalInformation) => {
  if (!user) return;
console.log("ADDITIONAL", additionalInformation)
  const { uid } = user;

  const userDocRef = doc(db, "users", uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = user;
    const createdAt = new Date();
    const docItem = { createdAt, displayName, email, ...additionalInformation };
    console.log('DOCITEM', docItem)

    try {
      await setDoc(userDocRef, {
        createdAt,
        displayName,
        email,
        ...additionalInformation
      })
    } catch (error) {
      console.log('Error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const signInWithEmail = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signUpWithEmail = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  if (!callback) return;

  onAuthStateChanged(auth, callback);
};
