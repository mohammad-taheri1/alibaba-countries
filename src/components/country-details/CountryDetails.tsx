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
                        <div className="body__left">1</div>
                        <div className="body__right">2</div>
                     </div>
                  </div>
                  <div className="country-details__card__content__neighbours">
                     <span>Border Countries: </span>
                     {country.borders?.map((item) => (
                        <Link key={item} to={`/country/${item}`}>
                           {item}
                        </Link>
                     ))}
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default CountryDetails;
