import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Home } from "./pages";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Home />} />
      </Route>
    </Routes>
  );
}


export default App;
