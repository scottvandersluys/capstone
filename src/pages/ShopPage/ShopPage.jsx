import { Route, Routes } from 'react-router-dom';
import { CategoriesPreview, Category } from '../../components';

const ShopPage = () => {

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export { ShopPage };
