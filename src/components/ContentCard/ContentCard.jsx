import React, { useEffect, useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

import CoursesService from "./service";

import logoEduPass from "../../assets/logo.png";
import desktopIcon from "../../assets/desktop_windows_black_18dp.svg";
import eventIcon from "../../assets/event_black_18dp.svg";
import locationIcon from "../../assets/location_city_black_18dp.svg";
import placeIcon from "../../assets/place_black_18dp.svg";
import scheduleIcon from "../../assets/schedule_black_18dp.svg";
import menuIcon from "../../assets/menu_book_black_18dp.svg";

import "./ContentCard.scss";

export function ContentCard() {
  const [options, setOptions] = useState([]);
  const coursesService = new CoursesService();

  async function getAllCourses() {
    const courses = await coursesService.getAllCourses();

    setOptions(courses);
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  return (
    <Row xs={1} md={4} className="g-4">
      {options.map((option) => (
        <Col key={option?.id}>
          <Card className="card">
            <Card.Img variant="top" src={logoEduPass} className="cardImage" />
            <Card.Body>
              <Card.Title className="cardTitle">
                {option?.curso_detalhe?.curso?.curso}
              </Card.Title>

              <hr></hr>

              <Row>
                <Col md={4}>
                  <Card.Text className="cardValue">
                    <p className="cardText">Valor com Edupass</p>{" "}
                    <p className="value">R$ 0,00</p>{" "}
                    <p className="oldValue">(era R${option?.valor_original})</p>
                  </Card.Text>
                </Col>

                <Col md={{ span: 4, offset: 4 }}>
                  <Card.Text className="cardPercent">
                    Bolsa <p className="percent">{option?.desconto}%</p>
                  </Card.Text>
                </Col>
              </Row>

              <hr></hr>

              <Row>
                <Col>
                  <Card.Text>
                    <img src={menuIcon} alt="menuIcon" />{" "}
                    {option?.curso_detalhe?.categoria_especifica}
                  </Card.Text>
                </Col>

                <Col>
                  <Card.Text>
                    <img src={desktopIcon} alt="desktopIcon" />{" "}
                    {option?.modalidade?.modalidade}
                  </Card.Text>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Card.Text>
                    <img src={scheduleIcon} alt="scheduleIcon" />{" "}
                    {option?.turno}
                  </Card.Text>
                </Col>

                <Col>
                  <Card.Text>
                    <img src={locationIcon} alt="locationIcon" />{" "}
                    {option?.campus?.instituicao?.instituicao}
                  </Card.Text>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Card.Text>
                    <img src={eventIcon} alt="eventIcon" /> {option?.duracao}{" "}
                    {option?.duracao_tipo}
                  </Card.Text>
                </Col>

                <Col>
                  <Card.Text>
                    <img src={placeIcon} alt="placeIcon" />{" "}
                    {option?.campus?.cidade}
                  </Card.Text>
                </Col>
              </Row>

              <Button variant="outline-light" className="cardButton">
                Saiba Mais
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
