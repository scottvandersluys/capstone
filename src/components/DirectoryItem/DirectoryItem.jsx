import { Link } from 'react-router-dom'; 
import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  
  return (
    <Link to={`shop/${title}`} className="DirectoryItem">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
};

export { DirectoryItem };