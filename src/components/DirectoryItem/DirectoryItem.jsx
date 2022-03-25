import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  
  return (
    <div className="DirectoryItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  )
};

export { DirectoryItem };