"use client";

import { MapViewer } from "./MapViewer";
import { useEffect, useState } from "react";

export function MapPage() {
	const [polygons, setPolygons] = useState<GeoJSON.Feature<GeoJSON.Polygon>[]>([
		JSON.parse(polygon1),
	]);

	useEffect(() => {
		// テスト動確
		console.log("polygons updated:", polygons);
	}, [polygons]);

	return (
		<div className="m-6 w-[1000px] h-[600px]">
			<MapViewer
				polygons={polygons}
				eventHandle={(newPolygons, action) => {
					if (action === "add") {
						setPolygons((pre) => [...pre, ...newPolygons]);
					} else if (action === "update") {
						setPolygons((pre) =>
							pre.map((p) => (p.id === newPolygons[0].id ? newPolygons[0] : p)),
						);
					} else if (action === "delete") {
						setPolygons((pre) => pre.filter((p) => p.id !== newPolygons[0].id));
					}
				}}
			/>
		</div>
	);
}

const polygon1 =
	'{"id":"7oTiSzKHGbFeieNuk4ET89Vj8qiI4ut8","type":"Feature","properties":{},"geometry":{"coordinates":[[[139.7389581882813,35.67412993221015],[139.73964483383236,35.662833796363316],[139.7489145487517,35.668830709501904],[139.7389581882813,35.67412993221015]]],"type":"Polygon"}}';
