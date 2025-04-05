import React from "react";
import { Drawer } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/outline";

/** ドロワーテンプレート */
export const TemplateDrawer = (props: {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    children?: JSX.Element | JSX.Element[];
    anchor?: "left" | "top" | "right" | "bottom";
}) => {
    const { isOpen, setIsOpen, children, anchor = "left" } = props;
    return (
        <Drawer
            open={isOpen}
            onClose={() => setIsOpen(false)}
            anchor={anchor}
        >
            <div className={`min-w-[300px]`}>
                <div className="ml-auto mr-3 mt-3 w-fit">
                    <XMarkIcon className="size-8 hover:bg-gray-200" onClick={() => setIsOpen(false)} />
                </div>
                {children}
            </div>
        </Drawer>
    )
}