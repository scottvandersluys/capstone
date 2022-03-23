import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Authentication, Home, Shop } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
