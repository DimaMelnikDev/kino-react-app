import style from "./NewPost.module.css";
import { reduxForm, Field } from "redux-form";
import {
  maxLength250,
  minLength3,
  renderTextarea,
  required,
} from "../../../../Utils/validators/validators";

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={renderTextarea}
        name="text"
        placeholder="Введите текст поста..."
        validate={[required, maxLength250, minLength3]}
      />
      <button className="button">Опубликовать</button>
    </form>
  );
};

let NewReduxPostForm = reduxForm({ form: "newPostForm" })(NewPostForm);

const NewPost = (props) => {
  let onSubmit = (values) => {
    props.addPost(values);
  };

  return (
    <div className={style.newPost}>
      <NewReduxPostForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewPost;
