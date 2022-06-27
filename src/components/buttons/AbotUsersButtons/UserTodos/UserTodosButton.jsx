import { Link } from "react-router-dom";

export const UserTodosButton = () => {
  return (
    <button className="buttons__user-about-button">
      <span>
        <Link to="user_todos">Todos</Link>
      </span>
    </button>
  );
};
