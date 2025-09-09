import RestaurantCard from './RestaurantCard';

const RestaurantGrid = ({ restaurants, onOrder }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {restaurants.map(restaurant => (
        <RestaurantCard 
          key={restaurant.id} 
          restaurant={restaurant} 
          onOrder={onOrder}
        />
      ))}
    </div>
  );
};

export default RestaurantGrid;