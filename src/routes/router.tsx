import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../pages/home/HomePage"));

const GlobalRoutes = () => {
   return (
      <Suspense fallback={<h1>Loading</h1>}>
         <Routes>
            <Route path="/" element={<HomePage />} />
         </Routes>
      </Suspense>
   );
};

export default GlobalRoutes;
