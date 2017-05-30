import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions as signupActions }  from './redux/signup';
import Signup from './components/Signup';

const mapStateToProps = state => {
  return { authenticationState: state.authentication };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...signupActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Signup);