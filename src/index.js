import React from 'react';
import ReactDOM from 'react-dom';
import CSR from "../assets/CSR.png";
import "./style.scss";

// document.body.innerHTML = '<div id="myMemes"></div>';
// document.getElementById("myMemes").innerHTML = `
//   <img src="${CSR}" />
// `;

const dynamicLoad = () => {
  import(/* webpackChunkName: "testModule" */ "./module-1").then(mod => {
  const nothing = mod.default();
  const nothingToo = mod.useless();

  // logs "This function does nothing and neither this one!"
  console.log(`${nothing} and ${nothingToo}`);
});
}
ReactDOM.render(<button onClick={dynamicLoad}>Click me</button>, document.getElementById('root'));