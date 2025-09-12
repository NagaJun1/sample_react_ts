import {
	type IControl,
	Layer,
	Map as MapLibre,
	type MapRef,
	Source,
} from "react-map-gl/maplibre";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import { type MutableRefObject, useEffect, useRef, useState } from "react";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import { MapSearchBox } from "./MapSearchBox";

type MapActionData = {
	features: GeoJSON.Feature<GeoJSON.Polygon>[];
	action: "add" | "update" | "delete";
};

/** マップの表示 */
export const MapViewer = (props: {
	/** 地図上に表示するポリゴンのリスト */
	features: GeoJSON.Feature<GeoJSON.Polygon>[];
	setFeatures: (features: GeoJSON.Feature<GeoJSON.Polygon>[]) => void;
}) => {
	const { features, setFeatures } = props;
	const mapRef = useRef<MapRef | null>(null);
	const [action, setAction] = useState<MapActionData | null>(null);

	// eventHandle で直接 setFeatures を呼び出すと features の変更が検知されないため、useEffect で対応
	useEffect(() => {
		if (action) {
			if (action.action === "add") {
				setFeatures([...features, ...action.features]);
			} else if (action.action === "update") {
				const updatedFeatures = features.map((feature) => {
					const updatedFeature = action.features.find(
						(f) => f.id === feature.id,
					);
					return updatedFeature ? updatedFeature : feature;
				});
				setFeatures(updatedFeatures);
			} else if (action.action === "delete") {
				const remainingFeatures = features.filter(
					(feature) => !action.features.find((f) => f.id === feature.id),
				);
				setFeatures(remainingFeatures);
			}
			setAction(null); // action をリセット
		}
	}, [action, features, setFeatures]);

	// 画面表示時の中心とする座標を算出
	const coordinates = features.map((x) => x.geometry.coordinates[0]);
	const allLng = coordinates.flat().map((x) => x[0]);
	const allLat = coordinates.flat().map((x) => x[1]);
	const centerLng = calcCenter(allLng, 139.6917);
	const centerLat = calcCenter(allLat, 35.6895);

	return (
		<div className="grid gap-4">
			<MapSearchBox setCenter={(center) => { mapRef.current?.flyTo({ center, zoom: 12 }) }} />
			<MapLibre
				ref={mapRef}
				initialViewState={{
					longitude: centerLng,
					latitude: centerLat,
					zoom: 12,
				}}
				mapStyle="https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json"
				style={{ width: "100%", height: "500px" }}
				onLoad={() => onMapLoad({ mapRef, features, eventHandle: setAction })}
			>
				<Source
					id="polygon"
					type="geojson"
					data={{ type: "FeatureCollection", features }}
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
		</div>
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
	features: GeoJSON.Feature<GeoJSON.Polygon>[];
	eventHandle: (data: MapActionData) => void;
}) => {
	const { mapRef, features, eventHandle } = props;
	if (!mapRef.current) return;
	const map = mapRef.current;
	const draw = new MapboxDraw({
		displayControlsDefault: false,
		controls: {
			polygon: true,
			trash: true,
		},
	});
	map.addControl((draw as unknown as IControl), "top-left"); // build エラー回避のため、型キャスト

	// 既存のポリゴンを描画
	for (const feature of features) {
		draw.add(feature);
	}
	map.on("draw.create", (e: EventParam) => eventHandle({ features: e.features, action: "add" }));
	map.on("draw.delete", (e: EventParam) => eventHandle({ features: e.features, action: "delete" }));
	map.on("draw.update", (e: EventParam) => eventHandle({ features: e.features, action: "update" }));
};

type EventParam = { features: GeoJSON.Feature<GeoJSON.Polygon>[]; }
