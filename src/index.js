import React from "react"; //리액트를쓰겠다고 선언
import ReactDOM from "react-dom/client"; //dom구조를 쓰겠다고 선언
import App from "./App";

//public에 있는 index파일을 연동시키는것
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
