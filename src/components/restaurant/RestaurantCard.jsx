import Button from '../ui/Button';

const RestaurantCard = ({ restaurant, onOrder }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-orange-100">
      <div className="h-48 bg-gradient-to-br from-[#FFE9CA] to-[#FFD166] overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover mix-blend-multiply"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
          <span className="bg-[#A8E6CF] text-gray-800 text-sm font-semibold px-2.5 py-0.5 rounded-full">
            {restaurant.rating} ★
          </span>
        </div>
        
        <p className="text-gray-600 mb-3">{restaurant.cuisine}</p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-700 bg-[#F5F5F5] px-3 py-1 rounded-full">
            {restaurant.price}
          </span>
          <span className="text-sm text-gray-700 bg-[#F5F5F5] px-3 py-1 rounded-full">
            {restaurant.deliveryTime}
          </span>
        </div>
        
        <Button 
          onClick={() => onOrder(restaurant)}
          className="w-full"
        >
          Order Now
        </Button>
      </div>
    </div>
  );
};

export default RestaurantCard;