import style from "./avatar.module.css";

const Avatar = (props) => {
  return (
    <span className={style.wrapper}>
      {props.avatarUrl ? (
        <img className={style.avatar} src={props.avatarUrl} alt={props.name} />
      ) : (
        <img
          className={style.defaultAvatar}
          src="https://static.tildacdn.com/tild3734-6434-4336-a233-386266333238/7498372277319d45830e.png"
          alt={props.name}
        />
      )}
      <span>{props.name}</span>
    </span>
  );
};
export default Avatar;
