import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserDetails } from "../../../reduxToolkit/users/userSlice";
import { getUSerDetails } from "../../../reduxToolkit/users/usersSelector";
import { AlbumCard } from "./AlbumCard";

export const UserAlbums = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const userDetails = useSelector(getUSerDetails);
  useEffect(() => {
    dispatch(fetchUserDetails({ id: userId, category: "albums" }));
  }, [dispatch, userId]);

  return (
    <section className="user-activity__albums">
      {userDetails.map((item) => (
        <AlbumCard key={item.id} item={item} />
      ))}
    </section>
  );
};
