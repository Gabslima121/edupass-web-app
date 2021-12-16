import React from 'react'

import { InputGroup, FormControl, Navbar, Col, Row } from 'react-bootstrap'

import logoEduPass from '../../assets/logo.png'
import './Header.scss'

export function Header() {
  return (
    <Row>
      <Navbar className="header" fixed="top">
        <Col>
          <div className="logoEdu">
            <img src={logoEduPass} alt="logoEduPass" />
          </div>
        </Col>

        <Col>
          <InputGroup className="searchBox">
            <FormControl
              className="searchBar"
              placeholder="Pesquisar"
              aria-label="Pesquisar"
            />
          </InputGroup>
        </Col>

        <Col>
          <Navbar.Text className="userInfo">
            Olá, <a href="#login">Matheus</a>
          </Navbar.Text>
        </Col>
      </Navbar>
    </Row>
  )
}