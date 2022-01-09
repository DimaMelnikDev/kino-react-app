import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css";

const DialogItem = (props) => {
    return (
      <li>
        <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>
          {props.name}
        </NavLink>
      </li>
    );
  };

export default DialogItem;