import { useState } from 'react';
import { signInWithEmail, signInWithGooglePopup } from "../../utilities/firebase/firebase.utils";
import { Button, FormInput } from '..';
import './AuthSignIn.scss';

const defaultFormFields = {
  email: "",
  password: ""
};

const AuthSignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmail(email, password);
      resetFormFields();
    } catch (error) {
      switch(error.code) {
        case "auth/wrong-password":
          alert('Incorrect password for email');
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="AuthSignIn">
    <h1>Already have an account?</h1>
    <form onSubmit={handleSubmit}>

      <FormInput
        id="sign-in-email"
        label="Email"
        name= "email"
        type="email"
        onChange={handleChange}
        value={email}
        required
      />

      <FormInput
        id="sign-in-password"
        label="Password"
        name="password"
        type="password"
        onChange={handleChange}
        value={password}
        required
      />

      <div className="buttons-container">
        <Button type="submit">Sign In</Button>
        <Button type="button" buttonClass="google" onClick={signInWithGoogle}>
          Google Sign In
        </Button>
      </div>
    </form>
  </div>
  );
};

export { AuthSignIn };