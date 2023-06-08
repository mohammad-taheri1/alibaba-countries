import { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import CustomSelect from "../../custom-select/CustomSelect";
import { regionsList } from "./regionsList";
import { useNavigate, useSearchParams } from "react-router-dom";
import useDebounce from "../../../hooks/useDebounce";
import "./home-header.scss";

interface IProps {
   sortAndSaveCountries: (sortType: string) => void;
}

const HomeHeader = ({ sortAndSaveCountries }: IProps) => {
   const [searchValue, setSearchValue] = useState<string>("");
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();
   const regionQueryParam = searchParams.get("region");

   const debouncedSearchValue = useDebounce(searchValue, 1000);

   useEffect(() => {
      const dynamicUrl = debouncedSearchValue !== "" ? `/?name=${debouncedSearchValue}` : "/";

      navigate(dynamicUrl);
   }, [debouncedSearchValue]);

   return (
      <div className="home-header">
         <div className="home-header__search">
            <input
               type="text"
               placeholder="Search for a country"
               value={searchValue}
               onChange={(e) => setSearchValue(e.target.value)}
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
