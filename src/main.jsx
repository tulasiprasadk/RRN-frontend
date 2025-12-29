import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import axios from "axios";
import { AuthProvider } from "./context/AuthContext";
<<<<<<< HEAD
=======
import AuthProviderWrapper from "./auth0-provider.jsx";
>>>>>>> f97d87f8dce02737794187fb19e67f7d7827a941

axios.defaults.withCredentials = true;
const baseName = import.meta.env.VITE_BASE_URL || "/";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
<<<<<<< HEAD
      <BrowserRouter basename={baseName}>
        <App />
      </BrowserRouter>
=======
      <AuthProviderWrapper>
        <BrowserRouter basename={baseName}>
          <App />
        </BrowserRouter>
      </AuthProviderWrapper>
>>>>>>> f97d87f8dce02737794187fb19e67f7d7827a941
    </AuthProvider>
  </React.StrictMode>
);
