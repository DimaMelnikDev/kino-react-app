import style from "./Post.module.css";

const Post = (props) => {
  return (
    <>
      <article className={style.post}>
        {props.avatar ? (
          <img
            className={style.avatar}
            src={props.avatar}
            alt={"avatar" + props.title}
          />
        ) : (
          <img
            className={style.defaultAvatar}
            src="https://static.tildacdn.com/tild3734-6434-4336-a233-386266333238/7498372277319d45830e.png"
            alt="DefaultAvatar"
          />
        )}

        <div>
          <h2>{props.title}</h2>
          <p>{props.message}</p>

          <div className={style.bottomWrapper}>
            <a className="button" href="/">
              open article
            </a>
            <span className="button">like</span>
            <span>{props.likeCount}</span>
          </div>
        </div>
      </article>
    </>
  );
};
export default Post;
