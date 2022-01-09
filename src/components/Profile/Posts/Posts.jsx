import style from "./Posts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const Posts = (props) => {
  let resPosts = props.posts.map((post) => (
    <Post
      key={post.id}
      avatar={post.avatar}
      title={post.title}
      message={post.message}
      likeCount={post.likeCount}
    />
  ));

  return (
    <section className={style.posts}>
      <h2 className={style.heading}>My posts</h2>
      <NewPost addPost={props.addPost} />
      <div>{resPosts}</div>
    </section>
  );
};
export default Posts;
