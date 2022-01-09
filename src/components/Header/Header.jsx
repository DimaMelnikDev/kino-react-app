import style from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>LOGO</div>
        <div className={style.loginlink}>
          {props.isAuth ? (
            <div onClick={props.logout}>
              <span>{props.login}&ensp;</span>
              <button className="button">
                Log out <span className={style.iconSize}>&#9111;</span>
              </button>
            </div>
          ) : (
            <Link className="button" to="/login">
              Log in <span className={style.iconSize}>&#9112;</span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
