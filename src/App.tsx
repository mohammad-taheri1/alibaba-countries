import Navbar from "./components/navbar/Navbar";
import GlobalRoutes from "./routes/router";

const App: React.FC = () => {
   return (
      <div>
         <Navbar />
         <GlobalRoutes />
      </div>
   );
};

export default App;
