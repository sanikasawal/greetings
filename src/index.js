import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';
const cssStyle = {};
const todayDate = new Date().toLocaleDateString();
const curTime = new Date().toLocaleTimeString();


if (curDate >= 1 && curDate <12) {
  greeting = 'Good Morning!';
  cssStyle.color = 'rgb(0, 119, 255)';
} else if (curDate >= 12 && curDate < 19) {
  greeting = 'Good Afternoon!';
  cssStyle.color = 'purple';
} else {
  greeting = 'Good Night!';
  cssStyle.color = 'black';
}


ReactDOM.render(
  <>
  <div>
  <h1>Hello Sir, <span style = {cssStyle}> {greeting} </span>
  <p>Today's Date: {todayDate}</p>
  <p>Current Time: {curTime}</p></h1>,
  
  </div>
  </>,
  document.getElementById("root")
);



















