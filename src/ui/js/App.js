import { useEffect, useState } from "react";
import { hydrate } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "react-loader-spinner";
import myPotrait from "url:../../img/my-potrait.png"; // eslint-disable-line

import Navbar from "./Navbar";
import Homepage from "./Homepage";
import VNav from "./VNav";
import Contacts from "./Contacts";
import Project from "./Project";
import ProjectDetails from "./ProjectDetails";
import Footer from "./Footer";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [showNav, toggleNav] = useState(false);
  const [active, toggleActive] = useState("home"); // for VNAV
  const [animate] = useState(true); //for VNAV
  const [animate1, toggleAnimate1] = useState(true);
  const [animate2, toggleAnimate2] = useState(false);
  const [animate3, toggleAnimate3] = useState(false);

  const [isImageReady, setReady] = useState(false);
  const fakeRequest = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  };

  useEffect(() => {
    fakeRequest().then(() => {
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setReady(true);
    };
    img.src = myPotrait; // by setting an src, you trigger browser download
  }, []);

  useEffect(() => {
    if (!isLoading) {
      toggleNav(true);
    }
  }, [isLoading]);

  if (isLoading || !isImageReady) {
    return (
      <div className="loader-container">
        <Loader
          type="MutatingDots"
          color="#3C8678"
          secondaryColor="#9A947C"
          height={100}
          width={100}
          timeout={5000}
        />
      </div>
    );
  }

  return (
    <Router>
      <Navbar showNav={showNav} />
      <Switch>
        <Route path="/contacts">
          <Contacts toggleNav={toggleNav} showNav={showNav} />
        </Route>
        <Route path="/project/:id">
          <ProjectDetails toggleNav={toggleNav} showNav={showNav} />
        </Route>
        <Route path="/project">
          <Project toggleNav={toggleNav} showNav={showNav} />
        </Route>
        <Route path="/">
          <VNav active={active} animate={animate} />
          <Homepage
            toggleActive={toggleActive}
            toggleAnimate1={toggleAnimate1}
            toggleAnimate2={toggleAnimate2}
            toggleAnimate3={toggleAnimate3}
            toggleNav={toggleNav}
            animate1={animate1}
            animate2={animate2}
            animate3={animate3}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
hydrate(<App />, document.getElementById("root"));
