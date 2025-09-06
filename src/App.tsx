import "./css/App.css";
import "./css/Menu.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Author from "./pages/Author";
import Reports from "./pages/Report";
import Home from "./pages/Home";
import { APP_NAME, PATH } from "./const/string";
import Samples from "./pages/Sample";
import Panels from "./pages/panels/panels";
import { DataSheet } from "./pages/DataSheet/DataSheet";
import { DrawerPage } from "./pages/sample/DrawerPage";
import { MapPage } from "./pages/PolygonMap/MapPage";

const App = () => {
  const routeList = [
    { path: "*", element: <Home />, },
    { path: "author", element: <Author /> },
    { path: "report", element: <Reports /> },
    { path: PATH.SAMPLE, element: <Samples /> },
    { path: `${PATH.SAMPLE}/${PATH.DRAWER}`, element: <DrawerPage /> },
    { path: "panels", element: <Panels /> },
    { path: "datasheet", element: <DataSheet /> },
    { path: "map", element: <MapPage /> },
  ]

  // 各ページのパス設定
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map(x => (
          <Route path={`${APP_NAME}/${x.path}`} element={x.element} key={x.path} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
