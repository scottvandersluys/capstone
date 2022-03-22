import './Category.scss';

const Category = ({ category }) => {
  const { imageUrl, title } = category;
  
  return (
    <div className="Category">
      <div className="category-image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
};

export { Category };