const CartIcon = ({ count, onClick }) => {
  return (
    <button 
      onClick={onClick} 
      className="relative p-2 bg-gradient-to-r from-[#FFE9CA] to-[#FFEFD6] rounded-full hover:from-[#FFE0B5] hover:to-[#FFE6C7] transition-all duration-200"
    >
      <svg 
        className="h-6 w-6 text-[#FF9E44]" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#6EC6CA] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
          {count}
        </span>
      )}
    </button>
  );
};

export default CartIcon;