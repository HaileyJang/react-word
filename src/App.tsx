import React from 'react';
import './App.css';
import { Word } from './Word';
import { Dropdown, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <>
    <div className="App">
      <div className = "container">
        <div className = "bigFont"><b>Words</b></div>
        <div className = "push-right">
    <Dropdown>
  <Dropdown.Toggle className = "customDropdown" id="dropdown-basic">
    Today
  </Dropdown.Toggle>
  </Dropdown>
  <FontAwesomeIcon icon = {faHome}/>
  </div>
  </div>
  <text className = "lastEdit"> Last Edit: 12:45 am</text>
      <div className = "wordList">
      <Table hover>
        <Word wordNumber = {1} wordCount = {78} percent = {7}/>
        <Word wordNumber = {2} wordCount = {100} percent = {3}/>
        <Word wordNumber = {3} wordCount = {28} percent = {2}/>
        <Word wordNumber = {4} wordCount = {84} percent = {-3}/>
        <Word wordNumber = {5} wordCount = {14} percent = {-9}/>
      </Table>
      </div>
    </div>
    </>
  );
}

export default App;
