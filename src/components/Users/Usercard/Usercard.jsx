import { Link } from "react-router-dom";
import "./Usercard.scss";

export const Usercard = ({ user }) => {
  return (
    <div className="user-card">
      <div className="user-card__name">
        <Link to={user.id.toString()}>{user.name}</Link>
      </div>
      <div className="user-card__nickname">{user.username}</div>
    </div>
  );
};
