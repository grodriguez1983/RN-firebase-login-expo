import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Login from './components/Login';
import { actions as loginActions }  from './redux/login'; 

const mapStateToProps = state => {
  return { authenticationState: state.authentication };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...loginActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);