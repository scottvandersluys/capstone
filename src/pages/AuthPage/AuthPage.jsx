import { AuthSignIn, AuthSignUp } from '../../components';
import './AuthPage.scss';

const AuthPage = () => {

  return (
    <div className="AuthPage">
      <AuthSignIn />
      <AuthSignUp />
    </div>
  );
};

export { AuthPage };
