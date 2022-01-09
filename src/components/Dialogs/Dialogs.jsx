import style from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = (props) => {
  return (
    <div className={style.dialogsWrapper}>
      <ul className={style.dialogs}>
        <h2>Dialogs</h2>
        {props.dialogs.map((d) => (
          <DialogItem id={d.id} name={d.name} key={d.id} />
        ))}
      </ul>

      <div className={style.messageHistory}>
        <div>
          {props.messages.map((m) => (
            <Message
              key={m.id}
              message={m.message}
              name={m.name}
              avatarUrl={m.avatarUrl}
            />
          ))}
        </div>

        <NewMessage sendMessage={props.sendMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
