import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { actions }  from '../../shared/redux/authentication';
import LandingPage from './components/LandingPage';

const mapStateToProps = state => {
  return { authenticationState: state.authentication };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...actions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
