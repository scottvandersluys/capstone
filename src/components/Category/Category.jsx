import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductCard } from '..';
import { CategoriesContext } from '../../contexts';
import './Category.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <div className="Category">
      <h2 className="title">{category.toUpperCase()}</h2>
      <div className="content">
        {
          products &&
            products.map((product) => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  );
};

export { Category };