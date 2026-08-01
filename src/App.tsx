import { APP_NAME, PATH } from "./const/string";
import "./css/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { DataSheet } from "./pages/DataSheet/DataSheet";
import { HandsontablePage } from "./pages/Handsontable/HandsontablePage";
import Home from "./pages/Home";
import { MapPage } from "./pages/PolygonMap/MapPage";
import Panels from "./pages/panels/panels";
import Samples from "./pages/Sample";
import { DrawerPage } from "./pages/sample/DrawerPage";

type RouteData = {
	path: string;
	element: JSX.Element;
	name: string;
};

export const routeList: RouteData[] = [
	{ path: "*", element: <Home />, name: "ホーム" },
	{ path: PATH.SAMPLE, element: <Samples />, name: "サンプルコード・ページ" },
	{
		path: `${PATH.SAMPLE}/${PATH.DRAWER}`,
		element: <DrawerPage />,
		name: "ドロワーページ",
	},
	{ path: "panels", element: <Panels />, name: "パネル" },
	{ path: "datasheet", element: <DataSheet />, name: "データシート" },
	{ path: "map", element: <MapPage />, name: "マップ" },
	{
		path: "handsontable-page",
		element: <HandsontablePage />,
		name: "handsontable",
	},
];

const App = () => {
	// 各ページのパス設定
	return (
		<BrowserRouter>
			<Routes>
				<Route path={"/"} element={<Layout />}>
					{routeList.map((x) => (
						<Route
							path={`/${APP_NAME}/${x.path}`}
							element={x.element}
							key={x.path}
						/>
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
