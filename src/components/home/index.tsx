import CountriesList from "./list/CountriesList";
import HomeHeader from "./header/HomeHeader";
import "./home.scss";

const HomeComponent = () => {
   return (
      <div className="home">
         <HomeHeader />
         <CountriesList />
      </div>
   );
};

export default HomeComponent;
