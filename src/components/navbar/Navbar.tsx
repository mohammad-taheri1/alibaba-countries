import { useContext } from "react";
import { AuthContext } from "../../context/DarkModeContext";
import { BsMoon } from "react-icons/bs";

import "./navbar.scss";

const Navbar = () => {
   const { toggleDarkMode } = useContext(AuthContext);
   return (
      <div className="navbar">
         <div className="navbar__brand">
            <span>Where in the World?</span>
         </div>
         <div className="navbar__toggle-dark-btn">
            <BsMoon onClick={toggleDarkMode} />
            <span>Dark Mode</span>
         </div>
      </div>
   );
};

export default Navbar;
