import React from "react";
import Main from "../../Components/Main/Main";
import "./home.css";
import { Container } from "@mui/material";
const home = () => {
  return (
    <div className="home-bg">
      <Container>
        <Main />
      </Container>
    </div>
  );
};

export default home;
