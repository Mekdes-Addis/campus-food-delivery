import { useState } from 'react';
import Layout from './components/layout/Layout';
import RestaurantGrid from './components/restaurant/RestaurantGrid';
import Cart from './components/cart/Cart';
import LoginModal from './components/auth/LoginModal';
import { restaurants } from './data/restaurants';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (restaurant) => {
    setCartItems([...cartItems, {
      id: Date.now(),
      name: restaurant.name,
      price: restaurant.price,
      image: restaurant.image
    }]);
  };

  const handleLogin = () => {
    setIsLoginOpen(true);
  };

  return (
    <Layout 
      cartCount={cartItems.length} 
      onCartClick={() => setIsCartOpen(true)}
      onLoginClick={handleLogin}
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF9E44] to-[#FFD166] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Hungry? We've got you covered.</h1>
          <p className="text-xl mb-8">Get food from your favorite campus restaurants delivered to your door.</p>
          <button className="bg-white text-[#FF9E44] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Order Now
          </button>
        </div>
      </section>

      {/* Restaurants Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Campus Favorites</h2>
          <p className="text-gray-600">These spots are popular with students right now</p>
        </div>
        
        <RestaurantGrid 
          restaurants={restaurants} 
          onOrder={handleAddToCart}
        />
      </section>

      {/* Cart Modal */}
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
      />

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)}
      />
    </Layout>
  );
}

export default App;