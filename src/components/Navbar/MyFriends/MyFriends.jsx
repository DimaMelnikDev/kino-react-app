import style from "./myFriends.module.css";
import Avatar from "../../Avatar/Avatar";

const MyFriends = (props) => {
  let myFriends = props.myFriends.map((f) => (
    <Avatar avatarUrl={f.avatarUrl} name={f.name} key={f.id}/>
  ));
  
  return (
    <div className={style.wrapper}>
      <h2>My Friends</h2>
      <div className={style.myFriendsList}>{myFriends}</div>
    </div>
  );
};
export default MyFriends;
