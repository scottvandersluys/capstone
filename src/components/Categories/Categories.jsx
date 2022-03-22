import { Category } from "..";
import './Categories.scss';

const Categories = ({ data }) => {

  return (
    <div className="Categories">
      {data.map((category) => (
       <Category key={category.id} category={category} />
      ))}
    </div>
  );
}


export { Categories };
