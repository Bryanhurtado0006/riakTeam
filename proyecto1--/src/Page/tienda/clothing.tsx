import ClothingCard from "../../componentes/gCard";
import "./tienda.css"; 

const Clothing: React.FC = () => {
  
  const products = [
    {
      id: 1,
      title: "Camiseta React",
      price: 25.99,
      image: "https://via.placeholder.com/300x300?text=Camiseta+React"
    },
    {
      id: 2,
      title: "Sudadera JavaScript",
      price: 45.99,
      image: "https://via.placeholder.com/300x300?text=Sudadera+JS"
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