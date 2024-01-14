import React from "react";
import ReactDOM from "react-dom/client";
import QuoteApp from "@/components/QuoteApp";
import '@/styles.css'

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);

root.render(
  <React.StrictMode>
    < QuoteApp />
  </React.StrictMode>
);



