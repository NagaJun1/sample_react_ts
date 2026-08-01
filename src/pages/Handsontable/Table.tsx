import { HotTable } from "@handsontable/react-wrapper";

export const HTable = ({ data }: { data: (string | number)[][] }) => (
	<HotTable
		data={data}
		rowHeaders={true}
		colHeaders={true}
		height="auto"
		autoWrapRow={true}
		autoWrapCol={true}
		licenseKey="non-commercial-and-evaluation" // for non-commercial use only
	/>
);
