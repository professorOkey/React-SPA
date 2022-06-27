import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { PostButton } from "../components/buttons/PostButtons";
import { PostModal } from "../components/PostModal";
import { Card } from "../components/Card/Card";
import { fetchPosts } from "../reduxToolkit/posts/postSlice";
import { getPosts } from "../reduxToolkit/posts/postsSelector";

export const Posts = () => {
  const state = useSelector(getPosts);
  const posts = state.posts;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section className="page">
      <div className="page__content">
        <div className="content__title">Posts page</div>
        {state.shownModal ? <PostModal /> : <PostButton />}
        <div className="content__posts">
          {posts.map((post) => (
            <Card key={post.title} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};
