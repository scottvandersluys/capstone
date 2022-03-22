import { createUserDocument, signInWithGooglePopup } from "../../utilities/firebase/firebase.utils";

import { AuthSignUp, Button } from '../../components';

const Auth = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocument(user);
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <Button buttonClass="google" onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <AuthSignUp />
    </div>
  );
};

export { Auth };
