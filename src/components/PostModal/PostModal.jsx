import { useForm } from "react-hook-form";
import { batch } from "react-redux";
import { useDispatch } from "react-redux/es/exports";
import "./PostModal.scss";
import { addPost, showModal } from "../../reduxToolkit/posts/postSlice";

export const PostModal = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (newPost) => {
    batch(() => {
      dispatch(showModal());
      dispatch(addPost(newPost));
    });
  };

  return (
    <form className="post" onSubmit={handleSubmit(onSubmit)}>
      <div className="post__body">
        <textarea
          placeholder="enter title of your post"
          className="post-body__header"
          {...register("title", {
            required: "Title is required field",
            minLength: {
              value: 10,
              message: "minimal size is 10 symbols",
            },
          })}
        />
        {errors?.title && (
          <div className="post-body__error">{errors.title.message}</div>
        )}
        <textarea
          placeholder="enter main text"
          className="post-body__description"
          {...register("body", {
            required: "Description is required field",
            minLength: {
              value: 20,
              message: "minimal size is 20 symbols",
            },
          })}
        />
        {errors?.body && (
          <div className="post-body__error">{errors.body.message}</div>
        )}
        <textarea
          placeholder="footer or copyright"
          className="post-body__footer"
          {...register("footer")}
        />
      </div>
      <input type="submit" value="ADD POST" className="post__button" />
    </form>
  );
};
