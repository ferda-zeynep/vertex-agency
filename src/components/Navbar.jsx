import { navItems } from "../constrants";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg bg-slate-50 border-b border-slate-100">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          {/* LOGO AREA - Vertex Agency */}
          <div className="flex items-center flex-shrink-0 tracking-tight">
            <span className="text-xl font-bold text-slate-800">
              Vertex<span className="text-green-600">Agency</span>
            </span>
          </div>

          {/* NAV ITEMS */}
          <ul className="hidden lg:flex ml-14 space-x-12 items-center font-medium text-slate-600">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="hover:text-green-600 transition-colors"
              >
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* AUTH BUTTONS */}
          <div className="hidden lg:flex justify-center space-x-6 items-center">
            <a
              href="#"
              className="py-2 px-3 text-green-600 font-medium hover:text-green-700 transition-colors"
            >
              Login
            </a>
            <a
              href="#"
              className="bg-green-600 text-white py-2 px-4 rounded-md font-medium hover:bg-green-700 transition-colors shadow-sm shadow-green-600/20"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
