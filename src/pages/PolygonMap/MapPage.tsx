"use client";

import { MapViewer } from "./MapViewer";
import { useEffect, useState } from "react";

export function MapPage() {
	const [features, setFeatures] = useState<GeoJSON.Feature<GeoJSON.Polygon>[]>([{
		id: polygon1.id,
		type: "Feature",
		properties: {},
		geometry: {
			type: "Polygon",
			coordinates: polygon1.geometry.coordinates,
		}
	}]);

	useEffect(() => {
		// テスト動確
		console.log("polygons updated:", features);
	}, [features]);

	return (
		<div className="m-6 w-[1000px] h-[600px]">
			<MapViewer features={features} setFeatures={setFeatures} />
		</div>
	);
}

const polygon1 = {
	"id": "7oTiSzKHGbFeieNuk4ET89Vj8qiI4ut8",
	"type": "Feature",
	"properties": {},
	"geometry": {
		"coordinates": [
			[
				[139.7389581882813, 35.67412993221015],
				[139.73964483383236, 35.662833796363316],
				[139.7489145487517, 35.668830709501904],
				[139.7389581882813, 35.67412993221015]
			]
		],
		"type": "Polygon"
	}
}
