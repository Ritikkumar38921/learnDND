import React from "react";
import ReactDOM from "react-dom";
// import App from "./trelloComponent/App";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
// import './index.css';
import App from './App';
// import Test1 from './Test1';

ReactDOM.render(
  <React.StrictMode>
    {/* <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider> */}
    <App />
    {/* <Test1 /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
