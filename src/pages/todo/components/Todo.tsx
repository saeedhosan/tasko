import { useEffect, useRef, useState } from "react";
import { SlClose } from "react-icons/sl";
import { useDispatch } from "react-redux";
import { TodoType } from "../../../app/types";
import { cn, timeago } from "../../../app/utiles";
import ButtonCircleColor from "../../../components/ButtonCircleColor";
import ButtonComplete from "../../../components/ButtonComplete";
import { todoColorSelect, todoCompleteToggle, todoDelete } from "../redux/actions";

export default function Todo(todo: TodoType) {
    const { title, id: todo_id, completed, color, datetime } = todo;
    const [expand, setExpand] = useState(false);
    const [groupBtns, setGroupBtns] = useState(false);

    const groupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function hideTodoColors(event: Event) {
            if (groupRef.current && !groupRef.current.contains(event.target as Node)) {
                setGroupBtns(false);
            }
        }
        document.body.addEventListener("click", hideTodoColors);

        return () => {
            document.body.removeEventListener("click", hideTodoColors);
        };
    }, []);

    return (
        <div
            onDoubleClick={() => setGroupBtns(true)}
            className={cn(
                "relative flex  overflow-hidden px-3 py-1 my-1 text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white space-x-4 cursor-pointer justify-between"
            )}
        >
            <div
                onClick={() => setExpand(!expand)}
                className={cn("transition-all text-base w-28s max-w-72", {
                    "line-through": completed,
                    truncate: !expand,
                })}
            >
                {title}
            </div>

            <div className="flex gap-3 overflow-hidden">
                {!groupBtns && (
                    <div
                        className={cn(
                            "inline-flex items-center justify-center px-2 py-px ms-3 text-[10px] font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400"
                        )}
                    >
                        {timeago(datetime)}
                    </div>
                )}

                <div ref={groupRef} className={cn("flex gap-3")}>
                    {groupBtns ? (
                        <ColorButtonGroup color={color} todo_id={todo_id} />
                    ) : completed ? (
                        <ButtonComplete className="border-0" />
                    ) : (
                        <ButtonCircleColor className="border-0" color={color} todoColor={color} />
                    )}
                </div>
            </div>
        </div>
    );
}

export function ColorButtonGroup({ todo_id, color }: { color: string; todo_id: number }) {
    const dispatch = useDispatch();

    return (
        <>
            <button
                onClick={() => dispatch(todoCompleteToggle(todo_id))}
                className={cn("h-4 w-4 rounded-full border-2 cursor-pointer border-green-400")}
            >
                <svg
                    className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                    viewBox="0 0 20 20"
                >
                    <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                </svg>
            </button>
            <ButtonCircleColor
                todoColor={color}
                color="green"
                onClick={() => dispatch(todoColorSelect(todo_id, "green"))}
            />

            <ButtonCircleColor
                todoColor={color}
                color="yellow"
                onClick={() => dispatch(todoColorSelect(todo_id, "yellow"))}
            />
            <ButtonCircleColor
                todoColor={color}
                color="red"
                onClick={() => dispatch(todoColorSelect(todo_id, "red"))}
            />

            <SlClose
                className="w-4 h-4 text-gray-800 cursor-pointer"
                onClick={() => dispatch(todoDelete(todo_id))}
            />
        </>
    );
}
