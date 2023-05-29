import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";
import { useFormik } from "formik";
import { todoSchema } from "../../schemas";

const initialValues = {
  todo: "",
};

const AddTodo = () => {
  const dispatch = useDispatch();

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   dispatch(addTodo({}));
  // };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: todoSchema,
      onSubmit: (values, action) => {
        // console.log(values.todo);
        dispatch(addTodo({ title: values.todo }));
        action.resetForm();
      },
    });

  return (
    <section className="pt-6 text-center">
      <h1 className="text-4xl font-semibold">To Do List</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col lg:flex-row items-center justify-center gap-3 my-5"
      >
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder="Add todo"
          value={values.todo}
          onChange={handleChange}
          onBlur={handleBlur}
          className="px-4 py-3 rounded-md border text-gray-500"
        />
        <button
          type="submit"
          className="py-3 px-4 text-white font-semibold bg-primary hover:bg-violet-500 rounded-md"
        >
          Add
        </button>
      </form>
      {errors.todo && touched.todo ? (
        <p className="text-error">{errors.todo}</p>
      ) : null}
    </section>
  );
};

export default AddTodo;
