import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { AuthProvider } from "./contexts/AuthContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </DarkModeProvider>
  </React.StrictMode>
);
