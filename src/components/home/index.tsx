import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import CountriesList from "./list/CountriesList";
import HomeHeader from "./header/HomeHeader";
import "./home.scss";
import { ICountry } from "../../typings/countryTypes";
import { useSearchParams } from "react-router-dom";
import { sortCountries } from "../../utils/sortCountries";

const HomeComponent = () => {
   const [counteries, setCounteries] = useState<ICountry[]>([]);
   const [loading, setLoading] = useState<boolean>(false);
   const [searchParams] = useSearchParams();

   const nameQueryParam = searchParams.get("name");
   const regionQueryParam = searchParams.get("region");

   const sortAndSaveCountries = (sortType: string) => {
      const sortedCountries = sortCountries([...counteries], sortType);
      setCounteries(sortedCountries);
   };

   const getCounteries = async (): Promise<any> => {
      if (nameQueryParam === "undefined" || regionQueryParam === "undefined") {
         return;
      }
      let dynamicURL = "";
      if (regionQueryParam) {
         dynamicURL = `/region/${regionQueryParam}`;
      } else if (nameQueryParam) {
         dynamicURL = `/name/${nameQueryParam}`;
      } else {
         dynamicURL = "/all";
      }

      try {
         setLoading(true);
         if (counteries) {
            setCounteries([]);
         }
         const { data } = await axios.get(dynamicURL);

         setCounteries(data);
      } catch (error) {
         return (error as AxiosError).message;
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getCounteries();
   }, [nameQueryParam, regionQueryParam]);

   if (loading) {
      <div className="home">
         <HomeHeader sortAndSaveCountries={sortAndSaveCountries} />
         <h1>Loading</h1>
      </div>;
   }

   return (
      <div className="home">
         <HomeHeader sortAndSaveCountries={sortAndSaveCountries} />
         {counteries.length > 0 ? <CountriesList counteries={counteries} /> : <h3>No Data to show</h3>}
      </div>
   );
};

export default HomeComponent;
