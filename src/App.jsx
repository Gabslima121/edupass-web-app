import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { Container } from "react-bootstrap";

import { Header } from "./components/Header/Header.jsx";
import { Banner } from "./components/Banner/Banner.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { ContentCard } from "./components/ContentCard/ContentCard.jsx";

export function App() {
  return (
    <div className="app">
      <Header />

      <div className="banner">
        <Banner />
      </div>

      <div className="content">
        <Container>
          <main>
            <ContentCard />
          </main>
        </Container>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
