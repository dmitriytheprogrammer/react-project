import styled from "styled-components";
import { useDataUni } from "./hooks/useDataUni";
import { Navbar } from "./components/Navbar";
import "./styles/index.css";
import MainRouter from "./routes/MainRouter";
import { Tables } from "./components/Tables";
import { Forms } from "./components/Forms";


export const App = () => {
  
  return (
    <>
      <Navbar/>
      <MainRouter/>
      <Tables/>
      <Forms/>
    </>
  );
};