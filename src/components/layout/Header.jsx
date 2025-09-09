import Button from '../ui/Button';
import SearchBar from '../ui/SearchBar';
import CartIcon from '../cart/CartIcon';

const Header = ({ cartCount, onCartClick, onLoginClick }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-orange-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-gradient-to-r from-[#FF9E44] to-[#FFD166] p-2 rounded-full mr-3">
            <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E44] to-[#FFD166]">
            CampusEats
          </h1>
        </div>
        
        <div className="hidden md:block flex-grow mx-8">
          <SearchBar />
        </div>
        
        <div className="flex items-center space-x-4">
          <CartIcon count={cartCount} onClick={onCartClick} />
          <Button onClick={onLoginClick} variant="outline">
            Login
          </Button>
        </div>
      </div>
      
      <div className="md:hidden container mx-auto px-4 pb-3">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;