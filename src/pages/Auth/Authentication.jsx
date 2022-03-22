import { AuthSignIn, AuthSignUp } from '../../components';
import './Authentication.scss';

const Authentication = () => {

  return (
    <div className="Authentication">
      <AuthSignIn />
      <AuthSignUp />
    </div>
  );
};

export { Authentication };
