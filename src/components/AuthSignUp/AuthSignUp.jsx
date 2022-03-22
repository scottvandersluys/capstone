import { useState } from 'react';

import { createUserDocument, signUpWithEmail } from '../../utilities/firebase/firebase.utils';

import { Button, FormInput } from '..';

import './AuthSignUp.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const AuthSignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("PASSWORDS DO NOT MATCH");
      return;
    }

    try {
      const { user } = await signUpWithEmail(email, password);
      await createUserDocument(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("That email is already in use!")
      } else {
        console.log('User creation encountered an error', error.message);
      }
    }
  };

  return (
    <div className="AuthSignUp">
      <h1>Don't have an account?</h1>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          onChange={handleChange}
          value={displayName}
          required
        />

        <FormInput
          label="Email"
          name= "email"
          type="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          required
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export { AuthSignUp };