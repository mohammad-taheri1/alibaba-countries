import "./navbar.scss";
import { BsMoon } from "react-icons/bs";

const Navbar = () => {
   return (
      <div className="navbar">
         <div className="navbar__brand">
            <span>Where in the World?</span>
         </div>
         <div className="navbar__toggle-dark-btn">
            <BsMoon />
            <span>Dark Mode</span>
         </div>
      </div>
   );
};

export default Navbar;
