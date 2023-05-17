import { useState, useEffect, useRef } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CustomSelect from "../../custom-select/CustomSelect";
import { regionsList } from "./regionsList";
import { useNavigate, useSearchParams } from "react-router-dom";
import "./home-header.scss";

interface IProps {
   sortAndSaveCountries: (sortType: string) => void;
}

const HomeHeader = ({ sortAndSaveCountries }: IProps) => {
   const [search, setSearch] = useState<string>("");
   const inputRef = useRef<HTMLInputElement>(null);
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   const regionQueryParam = searchParams.get("region");

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
         <div className="home-header__sort">
            <button onClick={() => sortAndSaveCountries("population")}>Sort By Population</button>
            <button onClick={() => sortAndSaveCountries("name")}>Sort By Name</button>
         </div>
         <div className="home-header__region">
            <CustomSelect data={regionsList} selectedValue={regionQueryParam} placeHolderText="Filter By Region" />
         </div>
      </div>
   );
};

export default HomeHeader;
