import CSR from "../assets/CSR.png";
import "./style.scss";
import("./module-1").then(mod => {
  const nothing = mod.default();
  const nothingToo = mod.useless();

  // logs "This function does nothing and neither this one!"
  console.log(`${nothing} and ${nothingToo}`);
});

document.body.innerHTML = '<div id="myMemes"></div>';
document.getElementById("myMemes").innerHTML = `
  <img src="${CSR}" />
`;
