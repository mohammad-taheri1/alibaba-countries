import { ICountry } from "../typings/countryTypes";

export const sortCountries = (countries: ICountry[], sortType: string) => {
   switch (sortType) {
      case "name": {
         const sortedCountries = countries.sort((a, b) => (a.name.common < b.name.common ? 1 : -1));
         return sortedCountries;
      }
      case "population": {
         const sortedCountries = countries.sort((a, b) => (a.population < b.population ? 1 : -1));
         return sortedCountries;
      }

      default:
         return countries;
   }
};
