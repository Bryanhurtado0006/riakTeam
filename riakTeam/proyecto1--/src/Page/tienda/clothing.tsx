import ClothingCard from "../../componentes/gCard";
import "./tienda.css"; 

const Clothing: React.FC = () => {
  
  const products = [
    {
      id: 1,
      title: "Camiseta React",
      price: 25.99,
      image: "https://th.bing.com/th/id/OIP.JHY8PGL-6lphqb2NklRTfwHaHa?rs=1&pid=ImgDetMain"
    },
    {
      id: 2,
      title: "Sudadera JavaScript",
      price: 45.99,
      image: "https://th.bing.com/th/id/OIP.JHY8PGL-6lphqb2NklRTfwHaHa?rs=1&pid=ImgDetMain"
    },
    
  ];

  return (
    <div className="storeContee">
      <h1>Tienda de Ropa</h1>
      <div className="cards-grid">
        {products.map((product) => (
          <ClothingCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Clothing;