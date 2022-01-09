import style from "./Users.module.css";
import user_default_avatar from "../../assets/image/user_default_avatar2.png";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let pages = [];
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div className={style.usersWrapper}>
      {props.users.map((user) => {
        return (
          <div key={user.id} className={style.user_wrapper}>
            <div className={style.left_sidebar_wrapper}>
              <NavLink to={"/profile/" + user.id}>
                <img
                  className={style.user_avatar}
                  src={
                    user.photos.small != null
                      ? user.photos.small
                      : user_default_avatar
                  }
                  alt={user.name}
                />
              </NavLink>

              {user.followed ? (
                <button
                  className="button unfollowBtn"
                  disabled={props.folowingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => props.unfollowThunk(user.id)}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className="button"
                  disabled={props.folowingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => props.followThunk(user.id)}
                >
                  Follow
                </button>
              )}
            </div>
            <div className={style.right_sidebar_wrapper}>
              <div className={style.left_item}>
                <h4>{user.name}</h4>
                <span>{user.status}</span>
              </div>
              <div className={style.right_item}>
                <div>{user.country}</div>
                <div>{user.city}</div>
              </div>
            </div>
          </div>
        );
      })}
      <ul className={style.usersPagePogination}>
        {pages.slice(140, 150).map((pageNumber, i) => {
          return (
            <li
              className={
                props.currentPage === pageNumber
                  ? style.poginationItemActive
                  : ""
              }
              key={i}
              onClick={(e) => {
                props.setCurrentPage(pageNumber);
              }}
            >
              {pageNumber}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;
