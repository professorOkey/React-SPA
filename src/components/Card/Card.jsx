import "./Card.scss";

export const Card = ({ post }) => {
  return (
    <section className="content__card">
      <div className="card__title">{post.title}</div>
      <div className="card__description">{post.body}</div>
      <div className="card__footer">{post.footer || "footer"}</div>
    </section>
  );
};
