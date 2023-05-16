import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import CountriesList from "./list/CountriesList";
import HomeHeader from "./header/HomeHeader";
import "./home.scss";
import { ICountry } from "../../typings/countryTypes";
import { useSearchParams } from "react-router-dom";

const HomeComponent = () => {
   const [counteries, setCounteries] = useState<ICountry[]>([]);
   const [loading, setLoading] = useState<boolean>(false);
   let [searchParams, setSearchParams] = useSearchParams();
   console.log("HomeComponent");

   const nameQueryParam = searchParams.get("name");

   const getCounteries = async (): Promise<any> => {
      let dynamicURL = "/all";
      if (nameQueryParam) {
         dynamicURL = `/name/${nameQueryParam}`;
      }
      try {
         setLoading(true);
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
   }, [nameQueryParam]);

   return (
      <div className="home">
         <HomeHeader />
         {loading ? <h1>Loading</h1> : counteries && <CountriesList counteries={counteries} />}
      </div>
   );
};

export default HomeComponent;
