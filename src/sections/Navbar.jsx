import { navLinks } from '../constants/index.js';

const NavItems = () => (
  <ul className="nav-ul">
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li">
        <a href={item.href} className="nav-li_a">
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="#mindpalace" id='home' className="text-white font-bold text-2xl hover:text-white transition-colors">
            Vishesh Thakral
          </a>

          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div className={`nav-sidebar max-h-screen`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>

    </header>
  );
};

export default Navbar;