import { ICountry } from "../../typings/countryTypes";
import "./country-card.scss";

interface IProps {
   country: ICountry;
}

const CountryCard = ({ country }: IProps) => {
   return (
      <div className="country-card">
         <div className="country-card__image">
            <img src={country.flags.svg} alt={country.flags.alt} />
         </div>
         <div className="country-card__content">
            <div className="country-card__content__title">
               <span>{country.name.common}</span>
            </div>
            <div className="country-card__content__population">
               <span>Population:</span>
               <span>{country.population}</span>
            </div>
            <div className="country-card__content__region">
               <span>Region:</span>
               <span>{country.region}</span>
            </div>
            <div className="country-card__content__capital">
               <span>CApital:</span>
               <span>{country.capital}</span>
            </div>
         </div>
      </div>
   );
};

export default CountryCard;
