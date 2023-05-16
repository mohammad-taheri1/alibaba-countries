import { ICountry } from "../../../typings/countryTypes";

interface IProps {
   counteries: ICountry[];
}

const CountriesList = ({ counteries }: IProps) => {
   return (
      <div>
         {counteries.map((item) => (
            <div key={item.name.common}>
               <h2>{item.name.common}</h2>
            </div>
         ))}
      </div>
   );
};

export default CountriesList;
