import {
	Layer,
	Map as MapLibre,
	type MapRef,
	Source,
} from "react-map-gl/maplibre";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { type MutableRefObject, useRef } from "react";
import MapboxDraw from "@mapbox/mapbox-gl-draw";

/** マップの表示 */
export const MapViewer = (props: {
	/** 地図上に表示するポリゴンのリスト */
	polygons: GeoJSON.Feature<GeoJSON.Polygon>[];
	eventHandle: (
		polygons: GeoJSON.Feature<GeoJSON.Polygon>[],
		action: "add" | "update" | "delete",
	) => void;
}) => {
	const { polygons, eventHandle } = props;
	const mapRef = useRef<MapRef | null>(null);

	// 画面表示時の中心とする座標を算出
	const coordinates = polygons.map((x) => x.geometry.coordinates[0]);
	const allLng = coordinates.flat().map((x) => x[0]);
	const allLat = coordinates.flat().map((x) => x[1]);
	const centerLng = calcCenter(allLng, 139.6917);
	const centerLat = calcCenter(allLat, 35.6895);

	return (
		<MapLibre
			ref={mapRef}
			initialViewState={{
				longitude: centerLng,
				latitude: centerLat,
				zoom: 12,
			}}
			mapStyle="https://basemaps.cartocdn.com/gl/voyager-gl-style/style.json"
			style={{ width: "100%", height: "500px" }}
			onLoad={() => onMapLoad({ mapRef, polygons, eventHandle })}
		>
			<Source
				id="polygon"
				type="geojson"
				data={{ type: "FeatureCollection", features: polygons }}
			/>
			<Layer
				id="polygon-layer"
				type="fill"
				source="polygon"
				paint={{
					"fill-color": "#ff0000", // ポリゴンの色（例: 赤）
					"fill-opacity": 0.5,
				}}
			/>
		</MapLibre>
	);
};

/** 値の最大値と最小値の中間を計算する */
const calcCenter = (values: number[], defaultVal: number) => {
	if (values.length === 0) {
		return defaultVal;
	}
	return (Math.min(...values) + Math.max(...values)) / 2;
};

/** マップが読み込まれたときの処理 */
const onMapLoad = (props: {
	mapRef: MutableRefObject<MapRef | null>;
	polygons: GeoJSON.Feature<GeoJSON.Polygon>[];
	eventHandle: (
		polygons: GeoJSON.Feature<GeoJSON.Polygon>[],
		action: "add" | "update" | "delete",
	) => void;
}) => {
	const { mapRef, polygons, eventHandle } = props;
	if (!mapRef.current) return;
	const map = mapRef.current;
	const draw = new MapboxDraw({
		displayControlsDefault: false,
		controls: {
			polygon: true,
			trash: true,
		},
	});
	map.addControl(draw, "top-left");

	// 既存のポリゴンを描画
	for (const polygon of polygons) {
		draw.add(polygon);
	}
	map.on("draw.create", (e: EventParam) => eventHandle(e.features, "add"));
	map.on("draw.delete", (e: EventParam) => eventHandle(e.features, "delete"));
	map.on("draw.update", (e: EventParam) => eventHandle(e.features, "update"));
};

type EventParam = { features: GeoJSON.Feature<GeoJSON.Polygon>[]; }
