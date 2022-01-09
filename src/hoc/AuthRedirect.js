import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const AuthRedirect = (Component) => {
  let mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth,
    };
  };
  let WrapperComponent = (props) => {
    if (!props.isAuth) {
      return <Redirect to="/login" />;
    } else {
      return <Component {...props} />;
    }
  };
  return connect(mapStateToProps)(WrapperComponent);
};

export default AuthRedirect;
