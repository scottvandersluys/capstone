import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import {
  AuthPage,
  CheckoutPage,
  HomePage,
  ShopPage
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="auth" element={<AuthPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="shop/*" element={<ShopPage />} />
      </Route>
    </Routes>
  );
}

export default App;
