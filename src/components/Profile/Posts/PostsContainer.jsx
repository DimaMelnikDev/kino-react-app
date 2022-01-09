import { addPost } from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const PostsContainer = connect(mapStateToProps, { addPost })(Posts);
export default PostsContainer;
