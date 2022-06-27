import { Outlet } from "react-router-dom";
import "../../../components/buttons/AbotUsersButtons/AboutUsersButton.scss";
import "./UserActivity.scss";
import { UserAlbumsButton } from "../../../components/buttons/AbotUsersButtons/UserAlbums/UserAlbumsButton";
import { UserPostsButton } from "../../../components/buttons/AbotUsersButtons/UserPosts";
import { UserTodosButton } from "../../../components/buttons/AbotUsersButtons/UserTodos";

export const UserActivity = () => {
  return (
    <section className="content__user-activity">
      <nav className="user-activity__buttons">
        <UserAlbumsButton />
        <UserPostsButton />
        <UserTodosButton />
      </nav>
      <Outlet />
    </section>
  );
};
