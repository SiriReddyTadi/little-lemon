import "../styles/FoodMenu.css";
import cafeFoodImage from "../assets/cafe_food.png";

const FoodMenu = () => {
  const menuItems = [
    { id: 1, name: "Neon Energy Drink", price: 4.99, description: "Boost your APM with our signature blend.", category: "drinks" },
    { id: 2, name: "Crispy Gamer Fries", price: 6.99, description: "Loaded with cheese, bacon, and special sauce. No greasy hands!", category: "snacks" },
    { id: 3, name: "Cyber Burger", price: 12.99, description: "Double patty, smoked cheddar, Brioche bun.", category: "mains" },
    { id: 4, name: "Lemon Dessert", price: 5.99, description: "The classic Little Lemon recipe straight from grandma's book.", category: "sweets" },
    { id: 5, name: "Health Potion (Smoothie)", price: 7.99, description: "Mixed berries, spinach, and protein powder.", category: "drinks" },
    { id: 6, name: "Mana Potion (Blue Raspberry)", price: 7.99, description: "Refreshing blue raspberry soda with edible glitter.", category: "drinks" },
  ];

  return (
    <div className="menu-container animate-fade-in">
      <div className="menu-header">
        <h2>Cafe <span className="title-highlight">Menu</span></h2>
        <p>Order straight to your desk so you never miss a match.</p>
      </div>
      
      <div className="menu-showcase">
        <img src={cafeFoodImage} alt="Delicious Cafe Food" className="showcase-img glass-panel" />
      </div>

      <div className="menu-grid">
        {menuItems.map(item => (
          <div key={item.id} className="menu-card glass-panel">
            <div className="menu-card-header">
              <h3>{item.name}</h3>
              <span className="price title-highlight">${item.price.toFixed(2)}</span>
            </div>
            <p className="description">{item.description}</p>
            <button className="btn-add">Add to Tab +</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodMenu;
