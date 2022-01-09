import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { initializedApp } from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.initializedApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <Router>
        <div className="app-wrapper">
          <HeaderContainer />

          <main className="content-wrapper">
            <Navbar sidebar={this.props.state.sidebar} />
            <Switch>
              <Route path="/profile/:userId?" component={ProfileContainer} />
              <Route path="/dialogs" component={DialogsContainer} />
              <Route path="/news" component={News} />
              <Route path="/music" component={Music} />
              <Route path="/users" component={UsersContainer} />
              <Route path="/login" component={Login} />
            </Switch>
          </main>

          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializedApp })(App);
