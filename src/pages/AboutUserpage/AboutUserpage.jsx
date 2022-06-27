import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./AboutUserpage.scss";
import { getUsers } from "../../reduxToolkit/users/usersSelector";
import { SiGooglestreetview } from "react-icons/si";
import { MdLocationCity } from "react-icons/md";
import { AiOutlinePhone, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { UserActivity } from "./UserActivity";

export const AboutUserPage = () => {
  const users = useSelector(getUsers);
  const { userId } = useParams();
  const user = useMemo(() => {
    return users.find(({ id }) => id === +userId);
  }, [users, userId]);

  return (
    <section className="content__user-about">
      <div className="user-about">
        <div className="user-about__name">
          <AiOutlineUser /> {user.name}
        </div>
        <div className="user-about__email">
          <AiOutlineMail /> {user.email}
        </div>
        <div className="user-about__phone">
          <AiOutlinePhone /> {user.phone.split(" ")[0]}
        </div>
        <div className="user-about__city">
          <MdLocationCity /> {user.address.city}
        </div>
        <div className="user-about__street">
          <SiGooglestreetview /> {user.address.street}
        </div>
      </div>
      <UserActivity />
    </section>
  );
};
