import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RoutesMapperComponent } from './components/routes/routes.component';
import App from './App';
import { RocketComponent } from "./components/rocket/rocket.component";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

const Routes = [
  { route: '/', component: <App /> },
  {
    route: 'rocket', component: <RocketComponent />
  }
]

root.render(
  <BrowserRouter>
    <RoutesMapperComponent routes={Routes} />
  </BrowserRouter>
);