import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Authentication, Home } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
