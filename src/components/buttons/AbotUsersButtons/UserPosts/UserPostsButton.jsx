import { Link } from "react-router-dom";

export const UserPostsButton = () => {
  return (
    <button className="buttons__user-about-button">
      <span>
        <Link to="user_posts">Posts</Link>
      </span>
    </button>
  );
};
