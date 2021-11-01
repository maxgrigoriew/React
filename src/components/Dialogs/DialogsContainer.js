/** @format */

import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  addDialogsMessages,
  updateDialogsNewMessages,
} from "../../Redux/dialogs-reduser";
import { withAuthRedirect } from "./../../HOC/withAuthRedirect";
import { compose } from "redux";

let mapStateToProps = (state) => {
  console.log(state);
  return {
    messages: state.dialogsReducer.messages,
    newMessages: state.dialogsReducer.newMessages,
    dialogs: state.dialogsReducer.dialogs,
  };
};

// let authRedirectComponent = withAuthRedirect(Dialogs)

// let DialogsContainer = connect(mapStateToProps, {
//     addDialogsMessages,
//     updateDialogsNewMessages,
// })(authRedirectComponent);

// альтернатива с compose:
export default compose(
  connect(mapStateToProps, {
    addDialogsMessages,
    updateDialogsNewMessages,
  }),
  withAuthRedirect
)(Dialogs);
// export default DialogsContainer;
