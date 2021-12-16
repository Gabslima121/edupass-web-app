import React from "react";
import { Row, Col, Navbar } from "react-bootstrap";

import wppIcon from "../../assets/whatsapp-icon.png";
import "./Footer.scss";

export function Footer() {
  return (
    <Navbar fixed="bottom" className="footerContent">
      <Row>
        <Col md={4}>
          <div className="policy">
            <Row>
              <a href="#useCase">Termos de Uso</a>
            </Row>

            <Row>
              <a href="#privacyTerms">Política de Privacidade</a>
            </Row>
          </div>
        </Col>

        <Col md={4}>
          <div className="information">
            <p>EduPass 2021 | Todos os direitos reservados</p>
            <p>Versão 1.3.5</p>
          </div>
        </Col>

        <Col md={4}>
          <div className="wpp">
            <p>Precisa de ajuda?</p>
            <p>
              {" "}
              <img src={wppIcon} alt="wppIcon" /> Chama no WhatsApp
            </p>
          </div>
        </Col>
      </Row>
    </Navbar>
  );
}
