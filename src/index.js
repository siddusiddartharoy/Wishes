import React from "react";
import ReactDOM from "react-dom";
const d = new Date();
let msg = d.getHours();
let val = "";
if (msg >= 0 && msg <= 12) {
  msg = "Good Morning";
  val = "red";
} else if (msg > 12 && msg <= 18) {
  msg = "Good Afternoon";
  val = "green";
} else {
  msg = "Good Night";
  val = "blue";
}
const custom = {
  color: val
};
ReactDOM.render(
  <h1 style={custom}> {msg} </h1>,

  document.getElementById("root")
);
