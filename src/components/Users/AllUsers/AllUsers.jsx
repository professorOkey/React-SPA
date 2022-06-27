import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import "./AllUsers.scss";
import { Usercard } from "../Usercard";
import { getUsers } from "../../../reduxToolkit/users/usersSelector";
import { fetchUsers } from "../../../reduxToolkit/users/userSlice";

export const AllUsers = () => {
  const users = useSelector(getUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="content__container">
      {users.map((user) => (
        <Usercard key={user.id} user={user} />
      ))}
    </div>
  );
};
