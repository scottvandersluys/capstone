import { DirectoryItem } from "..";
import './Directory.scss';

const Directory = ({ data }) => (
  <div className="Directory">
    {data.map((category) => (
      <DirectoryItem key={category.id} category={category} />
    ))}
  </div>
);


export { Directory };
