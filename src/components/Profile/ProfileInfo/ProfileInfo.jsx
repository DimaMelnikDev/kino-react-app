import React, { useEffect, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import textureBackground from "../../../assets/image/socialBG.png";
import user_default_avatar from "../../../assets/image/user_default_avatar2.png";

export const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  if (!props.profile) return <Preloader />;

  return (
    <div className={style.profileInfo}>
      <div className={style.wrapperBackground}>
        <img src={textureBackground} alt="bg" />
      </div>
      <div className={style.profileInfoWrapper}>
        <img
          className={style.profileInfoAvatar}
          src={
            props.profile.photos.small != null
              ? props.profile.photos.small
              : user_default_avatar
          }
          alt={props.profile.fullName}
        />
        <h3 className={style.profileInfoFullName}>{props.profile.fullName}</h3>

        <div className={style.profileInfoAboutMe}>
          <span className={style.status} onDoubleClick={activateEditMode}>
            {!editMode && (props.status || "---")}
            {editMode && (
              <input
                className={style.editInputStatus}
                autoFocus={true}
                onBlur={deactivateEditMode}
                type="text"
                value={status}
                onChange={onStatusChange}
              />
            )}
          </span>
        </div>

        <div className={style.profileInfoContacts}>
          {props.profile.contacts.facebook === null ? (
            ""
          ) : (
            <a href={"https://" + props.profile.contacts.facebook}>Facebook</a>
          )}
          {props.profile.contacts.website === null ? (
            ""
          ) : (
            <a href={"https://" + props.profile.contacts.website}>Website</a>
          )}
          {props.profile.contacts.vk === null ? (
            ""
          ) : (
            <a href={"https://" + props.profile.contacts.vk}>Vk</a>
          )}
          {props.profile.contacts.twitter === null ? (
            ""
          ) : (
            <a href={"https://" + props.profile.contacts.twitter}>Twitter</a>
          )}
          {props.profile.contacts.youtube === null ? (
            ""
          ) : (
            <a href={"https://" + props.profile.contacts.instagram}>
              Instagram
            </a>
          )}
          {props.profile.contacts.youtube === null ? (
            ""
          ) : (
            <a href={"https://" + props.profile.contacts.youtube}>Youtube</a>
          )}
          {props.profile.contacts.github === null ? (
            ""
          ) : (
            <a href={"https://" + props.profile.contacts.github}>Github</a>
          )}
          {props.profile.contacts.mainLink === null ? (
            ""
          ) : (
            <a href={"https://" + props.profile.contacts.mainLink}>MainLink</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
