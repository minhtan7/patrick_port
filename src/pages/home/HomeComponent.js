import React from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Projects from "../projects/Projects";
import ContactComponent from "../contact/ContactComponent";

function Home(props) {
  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Projects theme={props.theme} />
      <ContactComponent theme={props.theme} />
    </div>
  );
}

export default Home;
