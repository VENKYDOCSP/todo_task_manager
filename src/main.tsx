import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import QueryProvider from "./provider/QueryProvider.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { Toaster } from "react-hot-toast";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <Toaster />
      <BrowserRouter>
        <QueryProvider>
          <App />
        </QueryProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
