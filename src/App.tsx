import { Navbar } from "./components/Navbar";
import "./styles/index.css";
import MainRouter from "./routes/MainRouter";
import { Tables } from "./components/Tables";
import { Forms } from "./components/Forms";
import { GlobalStyles } from "./GlobalStyles";
export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <MainRouter />
      <Tables />
      <Forms />
    </>
  );
};
