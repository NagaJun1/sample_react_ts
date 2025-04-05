import React from "react";
import { TemplateDrawer } from "../../components/TemplateDrawer";
import { TemplateButton } from "../../components/TemplateButton";

export const DrawerPage = () => <PageBody />;

const PageBody = () => {
	return (<DrawerAndTriggerButton />);
};

/** トリガーボタンとドロワーのセット */
const DrawerAndTriggerButton = () => {
	const [isOpen, setIsOpen] = React.useState<string[]>([]);
	return (
		<>
			{["left", "top", "right", "bottom"].map((anchor) => (
				<div key={anchor}>
					<TemplateDrawer
						isOpen={isOpen.includes(anchor)}
						setIsOpen={(open: boolean) => setIsOpen(open ? [...isOpen, anchor] : isOpen.filter((a) => a !== anchor))}
						anchor={anchor as "left" | "top" | "right" | "bottom"}
					>
						<DrawerAndTriggerButton />
					</TemplateDrawer>
					<TemplateButton
						type="button"
						className="w-[220px] mx-2 my-1"
						color={anchor === "left" ? "red" : anchor === "top" ? "green" : anchor === "right" ? "yellow" : "default"}
						text={`ドロワー表示(${anchor})`}
						onClick={() => setIsOpen(pre => [...pre, anchor])}
					/>
				</div>
			))}
		</>
	);
}
