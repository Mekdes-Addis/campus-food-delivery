const SearchBar = () => {
  return (
    <div className="relative max-w-md w-full">
      <input 
        type="text" 
        placeholder="Search restaurants or dishes..." 
        className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF9E44] focus:border-transparent bg-white"
      />
      <svg 
        className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

export default SearchBar;