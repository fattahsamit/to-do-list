const TodoList = () => {
  const todos = [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: true },
  ];
  return (
    <ul className="text-xl w-full md:w-1/3 border p-5 rounded-md mx-auto">
      {todos.map((todo) => (
        <li
          className={`${
            todo.completed && "text-success"
          } my-4 p-2 border rounded`}
        >
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <span className="flex items-center gap-5">
              <input type="checkbox" checked={todo.completed}></input>
              {todo.title}
            </span>
            <button className="text-white px-2 py-1 rounded-md bg-error">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
