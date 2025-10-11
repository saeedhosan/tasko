import { cn } from "../app/utiles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    completed?: boolean;
}

export default function ButtonComplete(props: Props) {
    return (
        <button
            {...props}
            className={cn(
                "h-4 w-4 rounded-full border-2 cursor-pointer border-green-400",
                props?.className
            )}
        >
            <svg
                className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                viewBox="0 0 20 20"
            >
                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
            </svg>
        </button>
    );
}
