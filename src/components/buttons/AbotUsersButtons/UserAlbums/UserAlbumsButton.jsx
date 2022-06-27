import { Link } from "react-router-dom";

export const UserAlbumsButton = () => {
  return (
    <button className="buttons__user-about-button">
      <span>
        <Link to="user_albums">Albums</Link>
      </span>
    </button>
  );
};
