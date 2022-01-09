import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import MyFriends from "./MyFriends/MyFriends";

const Navbar = (props) => {
  let linkItem = props.sidebar.menu.map((i, index) => {
    return (
      <li key={index}>
        <NavLink to={i.path} activeClassName={style.active}>
          {i.name}
        </NavLink>
      </li>
    );
  });
  return (
    <nav className={style.navbar}>
      <ul>{linkItem}</ul>
      <MyFriends myFriends={props.sidebar.myFriends} />
    </nav>
  );
};
export default Navbar;
