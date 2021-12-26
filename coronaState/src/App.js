import React from "react";
import "./App.css";
import Header from './components/Header.js';
import Contents from './components/Contents.js';

function CoronaState() {
    return (
      <div className="App">
        <Header />
        <p> 클론 코딩 사이트 : 코로나 집계 현황  <a href='https://www.youtube.com/watch?v=DtLhiMxgsm0'>https://www.youtube.com/watch?v=DtLhiMxgsm0</a></p>
        <Contents />
      </div>
    )
  }
  
  export default CoronaState;