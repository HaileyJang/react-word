import React from 'react';
import './App.css';
import { Word } from './Word';
import { Col, Container, Dropdown, DropdownButton, Row, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  let dropDownLinkStyle = {
    backgroundColor: "white",
    color: "black",
  };

  return (
    <>
    <div className = "App">
    <Container fluid><Row><Col lg = {10}>
    <b>Words</b></Col>
    <Col sm = {1}>
      <Dropdown>
          <DropdownButton style={dropDownLinkStyle} title="Today" size="sm">
            Today
  </DropdownButton>
        </Dropdown></Col>
        <Col sm = {1}><FontAwesomeIcon icon={faCog} size="lg"/></Col></Row>
      </Container>
      <text className="lastEdit"> Last Edit: 12:45 am</text>
        <Table hover>
          <Word wordNumber={1} wordCount={78} percent={7} data = {[{ name: "a", value: 30 }, { name: "b", value: 60 }, { name: "c", value: 90 }, { name: "d", value: 100 }]}/>
          <Word wordNumber={2} wordCount={100} percent={3} data = {[{ name: "a", value: 30 }, { name: "b", value: 70 }, { name: "c", value: 90 }, { name: "d", value: 80 }]}/>
          <Word wordNumber={3} wordCount={28} percent={2} data = {[{ name: "a", value: 30 }, { name: "b", value: 70 }, { name: "c", value: 80 }, { name: "d", value: 90 }]}/>
          <Word wordNumber={4} wordCount={84} percent={-3} data = {[{ name: "a", value: 90 }, { name: "b", value: 70 }, { name: "c", value: 50 }, { name: "d", value: 40 }]}/>
          <Word wordNumber={5} wordCount={14} percent={-9} data = {[{ name: "a", value: 90 }, { name: "b", value: 70 }, { name: "c", value: 50 }, { name: "d", value: 20 }]}/>
        </Table>
        </div>
        </>
  );
}

export default App;
