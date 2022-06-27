import "./Todoitem.scss";
import { useDispatch } from "react-redux";
import { changeCompleted } from "../../reduxToolkit/todos/todoSlice";

export const Todoitem = ({ todo }) => {
  const dispatch = useDispatch();
  const onChangeHandler = () => {
    dispatch(changeCompleted(todo.id));
  };

  return (
    <form className="todos__item">
      <span className="item__text">{todo.title}</span>
      <div className="todo__input">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={onChangeHandler}
          id={todo.id}
        ></input>
        <label htmlFor={todo.id} className="checkbox"></label>
      </div>
    </form>
  );
};
