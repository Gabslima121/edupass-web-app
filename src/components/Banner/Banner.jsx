import React from "react";

import { Row, Col, Dropdown } from "react-bootstrap";

import "./Banner.scss";
import perfil from "../../assets/perfil.png";

export function Banner() {
  return (
    <div className="welcome">
      <div className="buttons">
        <Row xs="auto">
          <Col>
            <Dropdown className="courses">
              <Dropdown.Toggle className="btn-courses" id="dropdown">
                Cursos Gratuitos
              </Dropdown.Toggle>

              <Dropdown.Menu className="menuCoursesOptions">
                <Dropdown.Item className="menuOptions1 " href="#/action-1">
                  Action
                </Dropdown.Item>
                <Dropdown.Item className="menuOptions1 " href="#/action-2">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item className="menuOptions1 " href="#/action-3">
                  Something else
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col>
            <Dropdown className="areas">
              <Dropdown.Toggle className="btn-area" id="dropdown">
                Áreas
              </Dropdown.Toggle>

              <Dropdown.Menu className="menuAreaOptions">
                <Dropdown.Item className="menuOptions2 " href="#/action-1">
                  Action
                </Dropdown.Item>
                <Dropdown.Item className="menuOptions2 " href="#/action-2">
                  Another action
                </Dropdown.Item>
                <Dropdown.Item className="menuOptions2 " href="#/action-3">
                  Something else
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          <Col>
            <a type="button" className="clearFilter" href="#clear-filter">
              Remover Filtros
            </a>
          </Col>
        </Row>
      </div>

      <div className="bannerWelcome">
        <Row>
          <Col md={{ offset: 1 }} className="welcomeText">
            <h1>Cursos Gratuitos</h1>
          </Col>

          <Col md={{ offset: 8 }}>
            <img src={perfil} alt="perfil" />
          </Col>
        </Row>
      </div>
    </div>
  );
}
