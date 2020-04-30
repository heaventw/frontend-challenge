import { connect } from 'react-redux';
import { clearNotification } from '../../store/global/actions';
import { selectNotification } from '../../store/global/selects';
import Notification from '../../components/notification';

const mapStateToProps = state => {
  const notification = selectNotification(state);
  return {
    isVisible: !!notification,
    ...notification
  };
};

const mapDispatchToProps = {
  clear: clearNotification
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
