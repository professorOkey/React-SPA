import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Todoitem } from "../components/Todoitem";
import { fetchTodos } from "../reduxToolkit/todos/todoSlice";
import { getTodos } from "../reduxToolkit/todos/todosSelector";

export const Todo = () => {
  const todos = useSelector(getTodos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <section className="page">
      <div className="page__content">
        <div className="content__title">Todo Page</div>
        <div className="content__todos">
          {todos.map((todo) => (
            <Todoitem key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </section>
  );
};
