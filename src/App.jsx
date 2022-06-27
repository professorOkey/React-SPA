import { Routes, Route } from "react-router-dom";
import "./variables.scss";
import "./App.scss";
import { Homepage } from "./pages/Homepage";
import { Todo } from "./pages/Todopage";
import { Users } from "./pages/Userspage";
import { Posts } from "./pages/Postpage";
import { Layout } from "./components/Layout";
import { AboutUserPage } from "./pages/AboutUserpage";
import { AllUsers } from "./components/Users/AllUsers";
import { UserAlbums } from "./components/Users/UserAlbums";
import { UserTodos } from "./components/Users/UserTodos";
import { UserPosts } from "./components/Users/UserPosts";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="todo" element={<Todo />} />
          <Route path="users" element={<Users />}>
            <Route index element={<AllUsers />} />
            <Route exact path=":userId" element={<AboutUserPage />}>
              <Route path="user_albums" element={<UserAlbums />}></Route>
              <Route path="user_todos" element={<UserTodos />}></Route>
              <Route path="user_posts" element={<UserPosts />}></Route>
            </Route>
          </Route>
          <Route path="posts" element={<Posts />} />
        </Route>
      </Routes>
    </>
  );
};
