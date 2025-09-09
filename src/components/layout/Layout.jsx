import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, cartCount, onCartClick, onLoginClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFF9EC] to-[#FFEFD6] flex flex-col">
      <Header 
        cartCount={cartCount} 
        onCartClick={onCartClick} 
        onLoginClick={onLoginClick} 
      />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;