
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Apps from "./Apss.tsx";
import { store } from "./redux2/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <BrowserRouter>
      <Apps />
    </BrowserRouter>
  </Provider>
);
