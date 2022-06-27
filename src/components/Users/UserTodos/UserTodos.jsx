import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../../../reduxToolkit/users/userSlice";
import { getUSerDetails } from "../../../reduxToolkit/users/usersSelector";
import { Todoitem } from "../../Todoitem";

export const UserTodos = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userDetails = useSelector(getUSerDetails);
  useEffect(() => {
    dispatch(fetchUserDetails({ id: userId, category: "posts" }));
  }, [dispatch, userId]);

  return (
    <section className="user-activity__todos content__todos">
      {userDetails.map((item) => (
        <Todoitem key={item.id} todo={item} />
      ))}
    </section>
  );
};
