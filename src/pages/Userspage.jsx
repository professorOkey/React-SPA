import { Outlet } from "react-router-dom";

export const Users = () => {
  return (
    <section className="page">
      <div className="users-page__content">
        <div className="content__title">Users page</div>
        <Outlet />
      </div>
    </section>
  );
};
