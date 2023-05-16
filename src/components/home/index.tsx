import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";
import CountriesList from "./list/CountriesList";
import HomeHeader from "./header/HomeHeader";
import "./home.scss";
import { ICountry } from "../../typings/countryTypes";

const HomeComponent = () => {
   const [counteries, setCounteries] = useState<ICountry[]>([]);
   const [loading, setLoading] = useState<boolean>(false);

   const getCounteries = async (): Promise<any> => {
      try {
         setLoading(true);
         const { data } = await axios.get("/all");

         setCounteries(data);
      } catch (error) {
         return (error as AxiosError).message;
      } finally {
         setLoading(false);
      }
   };

   useEffect(() => {
      getCounteries();
   }, []);

   return (
      <div className="home">
         <HomeHeader />
         {loading && <h1>Loading</h1>}
         {counteries && <CountriesList counteries={counteries} />}
      </div>
   );
};

export default HomeComponent;
