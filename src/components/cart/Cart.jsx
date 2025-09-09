const Cart = ({ isOpen, onClose, items }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full shadow-xl transform transition-transform duration-300">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex-grow">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <div className="bg-gradient-to-r from-[#FFE9CA] to-[#FFEFD6] p-6 rounded-2xl inline-block mb-4">
                  <svg className="h-12 w-12 text-[#FF9E44] mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </div>
                <p className="text-gray-600">Your cart is empty</p>
                <p className="text-sm text-gray-500 mt-1">Add some delicious food to get started!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-orange-50 rounded-lg">
                    <div className="bg-gradient-to-r from-[#FF9E44] to-[#FFD166] w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">1×</span>
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-semibold text-gray-800">{item.name}</h4>
                      <p className="text-sm text-gray-600">{item.price}</p>
                    </div>
                    <button className="text-red-500 hover:text-red-700">
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="border-t border-gray-200 pt-4 mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Total:</span>
                <span className="text-xl font-bold text-[#FF9E44]">$24.99</span>
              </div>
              <button className="w-full bg-gradient-to-r from-[#FF9E44] to-[#FFD166] text-white py-3 rounded-full font-semibold hover:from-[#FF8B2D] hover:to-[#FFC84D] transition-all duration-200">
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;