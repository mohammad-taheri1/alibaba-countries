import { Link } from "react-router-dom";
import { ICountry } from "../../typings/countryTypes";
import "./country-card.scss";

interface IProps {
   country: ICountry;
}

const CountryCard = ({ country }: IProps) => {
   return (
      <Link to={`/country/${country.name.common}`} className="country-card">
         <div className="country-card__image">
            <img src={country.flags.svg} alt={country.flags.alt} />
         </div>
         <div className="country-card__content">
            <div className="country-card__content__title">
               <span>{country.name.common}</span>
            </div>
            <div className="country-card__content__population">
               <span className="bold">Population:</span>
               <span>{country.population}</span>
            </div>
            <div className="country-card__content__region">
               <span className="bold">Region:</span>
               <span>{country.region}</span>
            </div>
            <div className="country-card__content__capital">
               <span className="bold">Capital:</span>
               <span>{country.capital}</span>
            </div>
         </div>
      </Link>
   );
};

export default CountryCard;
