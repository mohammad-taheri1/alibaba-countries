import { useContext } from "react";
import Navbar from "./components/navbar/Navbar";
import { AuthContext } from "./context/DarkModeContext";
import GlobalRoutes from "./routes/router";

const App: React.FC = () => {
   const { isDarkMode } = useContext(AuthContext);

   const appStyle = isDarkMode ? "app dark" : "app";
   return (
      <div className={appStyle}>
         <Navbar />
         <GlobalRoutes />
      </div>
   );
};

export default App;
