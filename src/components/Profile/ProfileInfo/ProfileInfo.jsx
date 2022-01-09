import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import style from "./ProfileInfo.module.css";
import textureBackground from "../../../assets/image/socialBG.png";
import user_default_avatar from "../../../assets/image/user_default_avatar2.png";

class ProfileInfo extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };
  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };
  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }
  render() {
    if (!this.props.profile) return <Preloader />;
    return (
      <div className={style.profileInfo}>
        <div className={style.wrapperBackground}>
          <img src={textureBackground} alt="bg" />
        </div>
        <div className={style.profileInfoWrapper}>
          <img
            className={style.profileInfoAvatar}
            src={
              this.props.profile.photos.small != null
                ? this.props.profile.photos.small
                : user_default_avatar
            }
            alt={this.props.profile.fullName}
          />
          <h3 className={style.profileInfoFullName}>
            {this.props.profile.fullName}
          </h3>

          <div className={style.profileInfoAboutMe}>
            <span
              className={style.status}
              onDoubleClick={this.activateEditMode}
            >
              {this.state.editMode === false ? (
                this.props.status || "---"
              ) : (
                <input
                  className={style.editInputStatus}
                  autoFocus={true}
                  onBlur={this.deactivateEditMode}
                  type="text"
                  value={this.state.status}
                  onChange={this.onStatusChange}
                />
              )}
            </span>
          </div>

          <div className={style.profileInfoContacts}>
            {this.props.profile.contacts.facebook === null ? (
              ""
            ) : (
              <a href={"https://" + this.props.profile.contacts.facebook}>
                Facebook
              </a>
            )}
            {this.props.profile.contacts.website === null ? (
              ""
            ) : (
              <a href={"https://" + this.props.profile.contacts.website}>
                Website
              </a>
            )}
            {this.props.profile.contacts.vk === null ? (
              ""
            ) : (
              <a href={"https://" + this.props.profile.contacts.vk}>Vk</a>
            )}
            {this.props.profile.contacts.twitter === null ? (
              ""
            ) : (
              <a href={"https://" + this.props.profile.contacts.twitter}>
                Twitter
              </a>
            )}
            {this.props.profile.contacts.youtube === null ? (
              ""
            ) : (
              <a href={"https://" + this.props.profile.contacts.instagram}>
                Instagram
              </a>
            )}
            {this.props.profile.contacts.youtube === null ? (
              ""
            ) : (
              <a href={"https://" + this.props.profile.contacts.youtube}>
                Youtube
              </a>
            )}
            {this.props.profile.contacts.github === null ? (
              ""
            ) : (
              <a href={"https://" + this.props.profile.contacts.github}>
                Github
              </a>
            )}
            {this.props.profile.contacts.mainLink === null ? (
              ""
            ) : (
              <a href={"https://" + this.props.profile.contacts.mainLink}>
                MainLink
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileInfo;
