import React from "react";
import ReactDOM from "react-dom/client";
import { AutocompleteBan } from "react-ban-autocomplete";

function App() {
  return (
    <div className="App">
      <h1>Example App</h1>
      <AutocompleteBan />
    </div>
  );
}

const rootNode = document.getElementById("root");
if (!rootNode) {
  throw new Error("Root node not found");
}
const root = ReactDOM.createRoot(rootNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
