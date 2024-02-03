import { logo } from "../assets/index";
import { navLinks } from "../constants/constants";
import { HamBurger } from "../assets/index";

const Navbar = () => {
  return (
    <header className="absolute w-full padding-x  py-8">
      <nav className="z-10 flex justify-between items-center flex-wrap ">
      <img src={logo} alt="Travel-Logo" />
      <ul className="flex items-center gap-12 max-lg:hidden">
        {navLinks.map((item) => (
          <li key={item.id} className=" font-inter text-lg text-slate-gray hover:text-pink cursor-pointer ">
            {item.title}
          </li>
        ))}
      </ul>
      <div className="flex gap-8 max-lg:hidden">
        <button className="font-inter border rounded-full w-20 h-10 hover:scale-[1.05] text-slate-gray shadow-md hover:text-purple ">Login</button>
        <button className="font-inter border rounded-full w-24 h-10 hover:scale-[1.05] text-white bg-purple shadow-md hover:bg-white  hover:text-purple">Sign up</button>
      </div>
      <div className="hidden max-lg:block">
        <img src={HamBurger} alt="Hamburger Img " width={40} height={40} />
      </div>
      </nav>
    </header>
  );
};

export default Navbar;
