import { useDispatch } from "react-redux";
import { toggleComplete } from "../../redux/todoSlice";

interface TodoProps {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem = ({ id, title, completed }: TodoProps) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(toggleComplete({ id: id, completed: !completed }));
  };

  return (
    <li className={`${completed && "border-success"} my-2 p-2 border rounded`}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <span className="flex items-center gap-5">
          <input
            type="checkbox"
            onChange={handleComplete}
            checked={completed}
          ></input>
          {title}
        </span>
        <button className="text-white px-2 py-1 rounded-md bg-error">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
