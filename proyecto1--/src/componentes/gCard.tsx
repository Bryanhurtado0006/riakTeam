import { Link } from "react-router-dom";

interface gCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

const gCard: React.FC<gCardProps> = ({ id, title, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
      <Link to={`/product/${id}`} className="nav-link">
        Ver detalles
      </Link>
    </div>
  );
};

export default gCard;