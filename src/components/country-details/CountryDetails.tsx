import { useEffect, useState } from "react";
import { ICountry } from "../../typings/countryTypes";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";
import "./country-details.scss";

const CountryDetails = () => {
   const [country, setCountry] = useState<ICountry>();
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<boolean>(false);

   const { name } = useParams();
   const navigate = useNavigate();

   const getCountry = async (): Promise<any> => {
      try {
         setLoading(true);
         setCountry(undefined);
         setError(false);
         const { data } = await axios.get<ICountry[]>(`/name/${name}`);

         setCountry(data[0]);
      } catch (error) {
         setError(true);
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getCountry();
   }, [name]);

   return (
      <div className="country-details">
         <button className="country-details__back-btn" onClick={() => navigate("/")}>
            <BsArrowLeft />
            <span>Back</span>
         </button>
         {loading && <h1>Loading</h1>}
         {error && <h1>Nothing Found</h1>}
         {country && (
            <div className="country-details__card">
               <div className="country-details__card__image">
                  <img src={country.flags.svg} alt={country.flags.alt} />
               </div>
               <div className="country-details__card__content">
                  <div className="country-details__card__content__data">
                     <div className="title">
                        <span>{country.name.common}</span>
                     </div>
                     <div className="body">
                        <div className="body__column">
                           <div className="body__column__row">
                              <span className="bold">Native Name:</span>
                              <span>
                                 {country.name.nativeName
                                    ? Object.values(country.name.nativeName)[0]?.common
                                    : "No Data Found"}
                              </span>
                           </div>
                           <div className="body__column__row">
                              <span className="bold">Population:</span>
                              <span>{country.population}</span>
                           </div>
                           <div className="body__column__row">
                              <span className="bold">Region:</span>
                              <span>{country.region}</span>
                           </div>
                           <div className="body__column__row">
                              <span className="bold">Sub Region:</span>
                              <span>{country.subregion}</span>
                           </div>
                           <div className="body__column__row">
                              <span className="bold">Capital:</span>
                              <span>{country.capital}</span>
                           </div>
                        </div>
                        <div className="body__column">
                           <div className="body__column__row">
                              <span className="bold">Top Level Domain:</span>
                              <span>{country.tld}</span>
                           </div>
                           <div className="body__column__row">
                              <span className="bold">Currencies:</span>
                              <span>
                                 {country.currencies ? Object.values(country.currencies)[0]?.name : "No Data Found"}
                              </span>
                           </div>
                           <div className="body__column__row">
                              <span className="bold">Languages:</span>
                              <span>
                                 {country.languages
                                    ? Object.values(country.languages).map((lang, index) => {
                                         return <span key={index}>{index === 0 ? lang : `, ${lang}`}</span>;
                                      })
                                    : "No Data Found"}
                              </span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="country-details__card__content__neighbours">
                     <span>Border Countries: </span>
                     {country.borders ? (
                        country.borders?.map((item) => (
                           <Link key={item} to={`/country/${item}`}>
                              {item}
                           </Link>
                        ))
                     ) : (
                        <h1>No data</h1>
                     )}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default CountryDetails;
