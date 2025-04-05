const Colors = {
    default: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
    red: "bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
    green: "bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded",
    yellow: "bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded",
}

export const TemplateButton = (props: {
    type?: "submit" | "reset" | "button";
    onClick: () => void;
    text?: string | JSX.Element;
    color?: "default" | "red" | "green" | "yellow";
    className?: string;
}) => {
    const { type, onClick, text, color = "default", className } = props;
    return (
        <button type={type} className={`p-2 ${Colors[color]} ${className ?? ""}`} onClick={onClick}>
            {text}
        </button>
    )
}