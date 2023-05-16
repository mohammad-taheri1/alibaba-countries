import { ICountry } from "../../../typings/countryTypes";
import CountryCard from "../../country-card/CountryCard";
import "./country-list.scss";

interface IProps {
   counteries: ICountry[];
}

const CountriesList = ({ counteries }: IProps) => {
   return (
      <div className="country-list">
         {counteries.map((country) => (
            <CountryCard key={country.name.common} country={country} />
         ))}
      </div>
   );
};

export default CountriesList;
