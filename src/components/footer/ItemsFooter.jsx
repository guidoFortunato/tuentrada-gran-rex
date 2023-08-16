import { Link } from "react-router-dom";

export const ItemsFooter = ({ item }) => {
  // console.log({item})
  return (
    <li key={item.id}>
      <Link to={item.path} className={`mr-4 hover:underline md:mr-6`}>
        {item.type.name}
      </Link>
    </li>
  );
};
