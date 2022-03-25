import { useContext } from "react";
import { CategoriesContext } from "../../contexts";
import { CategoryPreview } from "..";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="CategoriesPreview">
      {
        Object.keys(categoriesMap).map((title) => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} products={products} title={title} />
        })
      }
    </div>
  );
};

export { CategoriesPreview };
