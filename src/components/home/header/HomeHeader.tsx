import { AiOutlineSearch } from "react-icons/ai";
import CustomSelect from "../../custom-select/CustomSelect";
import { regionsList } from "./regionsList";
import "./home-header.scss";

const HomeHeader = () => {
   return (
      <div className="home-header">
         <div className="home-header__search">
            <input type="text" placeholder="Search for a country" />
            <AiOutlineSearch />
         </div>
         <div className="home-header__region">
            <CustomSelect data={regionsList} placeHolderText="Filter By Region" />
         </div>
      </div>
   );
};

export default HomeHeader;
