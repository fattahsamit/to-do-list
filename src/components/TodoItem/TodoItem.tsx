import { toggleComplete, deleteTodo } from "../../redux/todoSlice";
import { useAppDispatch } from "../../redux/store";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem = ({ id, title, completed }: TodoProps) => {
  const dispatch = useAppDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <li
      className={`${
        completed && "border-success dark:border-primary"
      } m-3 p-2 border rounded dark:text-slate-100`}
    >
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <span className="flex items-center gap-5">
          <input
            type="checkbox"
            onChange={handleComplete}
            checked={completed}
          ></input>
          {title}
        </span>
        <button
          onClick={handleDelete}
          className="text-white px-2 py-1 rounded-md bg-error hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
