const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-[#FF9E44] to-[#FFD166] hover:from-[#FF8B2D] hover:to-[#FFC84D] text-gray-800',
    secondary: 'bg-[#A8E6CF] hover:bg-[#95D9BB] text-gray-800',
    outline: 'border border-[#FF9E44] text-[#FF9E44] hover:bg-[#FFF0DC]'
  };
  
  return (
    <button 
      className={`px-6 py-3 rounded-full font-medium transition-all duration-200 shadow-sm hover:shadow-md ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;