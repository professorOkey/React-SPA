import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../../../reduxToolkit/users/userSlice";
import { getUSerDetails } from "../../../reduxToolkit/users/usersSelector";
import { Card } from "../../Card/Card";

export const UserPosts = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userDetails = useSelector(getUSerDetails);
  useEffect(() => {
    dispatch(fetchUserDetails({ id: userId, category: "posts" }));
  }, [dispatch, userId]);

  return (
    <section className="user-activity__posts content__posts">
      {userDetails.map((item) => (
        <Card key={item.id} post={item} />
      ))}
    </section>
  );
};
