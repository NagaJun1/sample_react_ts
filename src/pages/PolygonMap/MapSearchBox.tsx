import { Button, Input } from "@mui/material";
import { useState } from "react";

type Center = { lng: number; lat: number };

/** 座標検索窓 */
export const MapSearchBox = (props: { setCenter: (data: Center) => void }) => {
	const { setCenter } = props;
	const [search, setSearch] = useState("");
	const [loading, setLoading] = useState(false);
	return (
		<div className="flex gap-2">
			<input
				className="border border-gray-300 rounded-md p-2 min-w-[500px]"
				placeholder="住所を入力"
				onChange={(e) => setSearch(e.target.value)}
			/>
			<Button
				type="button"
				variant="contained"
				loading={loading}
				disabled={loading || search.length < 1}
				onClick={async () => {
					setLoading(true);
					const result = await handleSearch(search);
					if (result) {
						setCenter(result);
					} else {
						alert("住所が見つかりませんでした");
					}
					setLoading(false);
				}}
			>
				検索
			</Button>
		</div>
	);
};

/** 住所から座標を取得 */
const handleSearch = async (search: string): Promise<Center | null> => {
	const res = await fetch(
		`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}`,
	);
	const data = await res.json();
	if (data.length > 0) {
		const lat = data[0].lat;
		const lng = data[0].lon;
		return { lat, lng };
	}
	return null;
};
