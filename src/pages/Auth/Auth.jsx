import { createUserDocument, signInWithGooglePopup } from "../../utilities/firebase/firebase.utils";

const Auth = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocument(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>
        Sign in with Google
      </button>
    </div>
  );
};

export { Auth };
