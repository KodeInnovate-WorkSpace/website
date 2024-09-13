const Footer = () => {
  return (
    <footer className="bg-mainColor text-gray-300 py-10 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Recent Properties */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">
            Recent Properties
          </h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Property 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Property 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Property 3
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Property 4
              </a>
            </li>
          </ul>
        </div>

        {/* Our Agents */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Our Agents</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <img
                src="src\assets\person.svg"
                alt="Agent 1"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>Agent 1</span>
            </li>
            <li className="flex items-center">
              <img
                src="src\assets\person.svg"
                alt="Agent 2"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>Agent 2</span>
            </li>
            <li className="flex items-center">
              <img
                src="src\assets\person.svg"
                alt="Agent 3"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>Agent 3</span>
            </li>
            <li className="flex items-center">
              <img
                src="src\assets\person.svg"
                alt="Agent 4"
                className="w-8 h-8 rounded-full mr-2"
              />
              <span>Agent 4</span>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>
          <p className="mb-2">
            <strong>Address:</strong> 123 Real Estate Ave, City, State
          </p>
          <p className="mb-2">
            <strong>Phone:</strong> +1 234 567 890
          </p>
          <p className="mb-2">
            <strong>Email:</strong> contact@realestate.com
          </p>
          <p className="mb-2">
            <strong>RERA No:</strong> ABC123456
          </p>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
            <a href="#" className="hover:text-white">
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
