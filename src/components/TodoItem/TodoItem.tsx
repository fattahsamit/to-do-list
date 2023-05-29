interface TodoProps {
  title: string;
  completed: boolean;
}

const TodoItem = ({ title, completed }: TodoProps) => {
  return (
    <li className={`${completed && "text-success"} my-2 p-2 border rounded`}>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <span className="flex items-center gap-5">
          <input type="checkbox" checked={completed}></input>
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
