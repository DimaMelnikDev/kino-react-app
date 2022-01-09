import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import {
  renderInput,
  required,
  email,
  minLength6,
} from "../../Utils/validators/validators";
const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className="red">{props.error}</div>
      <div>
        <Field
          component={renderInput}
          validate={[required, email]}
          name="email"
          placeholder="email"
        />
      </div>
      <div>
        <Field
          component={renderInput}
          validate={[required, minLength6]}
          name="password"
          type="password"
          placeholder="Password"
        />
      </div>
      <div>
        <Field
          component={renderInput}
          name="rememberMe"
          type="checkbox"
          label="save"
        />
      </div>

      <button>Submit</button>
    </form>
  );
};

let LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

class Login extends React.Component {
  onSubmit = (dataForm) => {
    this.props.login(dataForm);
  };

  render() {
    if (this.props.isAuth) {
      return <Redirect to="/profile" />;
    }
    return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
export default connect(mapStateToProps, { login })(Login);
