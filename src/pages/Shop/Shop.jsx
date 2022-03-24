import { useContext } from "react";
import { ProductsContext } from "../../contexts";
import { ProductCard } from "../../components";
import './Shops.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="Shop">
      { 
        products.map((product) => <ProductCard key={product.id} product={product} />)
      }
    </div>
  );
};

export { Shop };
