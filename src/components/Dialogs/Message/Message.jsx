import style from "./Message.module.css";
import Avatar from "../../Avatar/Avatar";

const Message = (props) => {
  return (
    <div className={style.message + " " + style.righted}>
      <Avatar name={props.name} avatarUrl={props.avatarUrl} />
      <div className={style.messageText}>{props.message}</div>
    </div>
  );
};

export default Message;
