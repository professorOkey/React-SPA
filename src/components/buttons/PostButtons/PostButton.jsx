import { useDispatch } from "react-redux/es/exports";
import "./PostButton.scss";
import { showModal } from "../../../reduxToolkit/posts/postSlice";

export const PostButton = () => {
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(showModal());
  };

  return (
    <button className="content__create-post" onClick={onClickHandler}>
      Create new Post
    </button>
  );
};
