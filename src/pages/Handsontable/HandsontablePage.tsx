import { HTable } from "./Table";

export const HandsontablePage = () => (
	<HTable
		data={[
			["", "Tesla", "Volvo", "Toyota", "Ford"],
			["2019", 10, 11, 12, 13],
			["2020", 20, 11, 14, 13],
			["2021", 30, 15, 12, 13],
		]}
	/>
);
