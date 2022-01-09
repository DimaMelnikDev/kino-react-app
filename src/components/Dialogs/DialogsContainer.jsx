import { sendMessage } from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { compose } from "redux";
import Dialogs from "./Dialogs";
import withAuthRedirect from "../../hoc/AuthRedirect";
const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, { sendMessage })
)(Dialogs);
