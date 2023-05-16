import { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CustomSelect from "../../custom-select/CustomSelect";
import { regionsList } from "./regionsList";
import { useNavigate } from "react-router-dom";
import "./home-header.scss";

const HomeHeader = () => {
   const [search, setSearch] = useState<string>("");
   const inputRef = useRef<HTMLInputElement>(null);
   const navigate = useNavigate();

   useEffect(() => {
      if (search !== "") {
         const timer = setTimeout(() => {
            if (inputRef.current?.value === search) {
               navigate(`/?name=${search}`);
            }
         }, 3000);
      }
      return () => {};
   }, [search]);

   return (
      <div className="home-header">
         <div className="home-header__search">
            <input
               ref={inputRef}
               type="text"
               placeholder="Search for a country"
               value={search}
               onChange={(e) => setSearch(e.target.value)}
            />
            <AiOutlineSearch />
         </div>
         <div className="home-header__region">
            <CustomSelect data={regionsList} placeHolderText="Filter By Region" />
         </div>
      </div>
   );
};

export default HomeHeader;
