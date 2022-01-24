import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Employees from "./components/Employees";
import Offers from "./components/offer/Offers";
import Footer from "./components/Footer";

import { offersData } from "./dataOffers";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Employees />
      <Offers offers={offersData} />
      <Footer />
    </div>
  );
}

export default App;
