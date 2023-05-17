import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/HomePage"));
const CountryPage = lazy(() => import("../pages/country/CountryPage"));

const GlobalRoutes = () => {
   return (
      <Suspense fallback={<h1>Loading</h1>}>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:name" element={<CountryPage />} />
         </Routes>
      </Suspense>
   );
};

export default GlobalRoutes;
