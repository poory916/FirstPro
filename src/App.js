import { Fragment } from "react";
import Header from "./Components/Header/Header.js";
import Caroucel from "./Components/Caroucel/Caroucel.js";
import FirstHero from "./Pages/FirstHero/FirstHero.js";
import SecondHero from './Pages/SecondHero/SecondHero.js';
import Moshavere from './Pages/Moshavere/Moshavere.js';
import Levels from './Pages/Levels/Levels.js';
import Examples from './Pages/Examples/Examples.js';
import Ghaleb from "./Pages/Ghaleb/Ghaleb.js";
import Khadamat from "./Pages/Khadamat/Khadamat.js";
import SecondGhaleb from "./Pages/SecondGhaleb/SecondGhaleb.js";
import Khabar from "./Pages/Khabar/Khabar.js";
import "./App.css";
import Footer from "./Pages/Footer/Footer.js";

function App() {
  return (
    <Fragment>
      <Header />
      <Caroucel />
      <FirstHero />
      <SecondHero />
      <Moshavere />
      <Levels />
      <Examples />
      <Ghaleb />
      <Khadamat />
      <SecondGhaleb />
      <Khabar />
      <Footer />
    </Fragment>
  );
}

export default App;
