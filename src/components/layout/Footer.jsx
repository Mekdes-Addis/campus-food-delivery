const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#FFF0DC] to-[#FFE9CA] border-t border-orange-200 py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF9E44] to-[#FFD166] mb-4">
              CampusEats
            </h3>
            <p className="text-gray-700">
              Delivering campus favorites straight to your door.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#FF9E44]">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF9E44]">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF9E44]">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-[#FF9E44]">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF9E44]">Safety Tips</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#FF9E44]">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Info</h4>
            <p className="text-gray-600">contact@campuseats.edu</p>
            <p className="text-gray-600">(555) 123-FOOD</p>
            <p className="text-gray-600">Campus Union Building, Room 101</p>
          </div>
        </div>
        
        <div className="border-t border-orange-200 mt-8 pt-8 text-center text-gray-600">
          <p>© 2023 CampusEats. Made with ♥ for students.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;