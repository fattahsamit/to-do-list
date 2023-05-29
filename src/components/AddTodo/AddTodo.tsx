const AddTodo = () => {
  return (
    <section className="my-4 p-6 text-center">
      <h1 className="text-4xl font-semibold">To Do List</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-3 my-5">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Add todo"
          required
          className="px-4 py-3 rounded-md border text-gray-500"
        />
        <button className="py-3 px-4 text-white font-semibold bg-primary hover:bg-violet-500 rounded-md">
          Add
        </button>
      </div>
    </section>
  );
};

export default AddTodo;
