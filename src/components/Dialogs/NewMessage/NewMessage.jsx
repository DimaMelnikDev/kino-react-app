import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLength120,
  renderTextarea,
  required,
} from "../../../Utils/validators/validators";
import style from "./NewMessage.module.css";

const NewMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={renderTextarea}
        name="text"
        placeholder="Введите текст сообщения..."
        validate={[maxLength120, required]}
      />
      <button className="button">Опубликовать</button>
    </form>
  );
};
const NewMessageFormRedux = reduxForm({ form: "NewMessageForm" })(
  NewMessageForm
);

const NewMessage = (props) => {
  let onSubmit = (message) => {
    props.sendMessage(message);
  };
  return (
    <div className={style.newMessage}>
      <NewMessageFormRedux onSubmit={onSubmit} />
    </div>
  );
};

export default NewMessage;
