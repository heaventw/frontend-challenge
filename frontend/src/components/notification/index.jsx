import React from 'react';
import { injectIntl } from 'react-intl';
import './index.scss';

export const NotificationTypes = {
  ERROR: 'error',
  INFO: 'info'
};

const Notification = ({
  intl,
  isVisible = false,
  type = NotificationTypes.INFO,
  message,
  clear
}) => {
  if (!isVisible) {
    return false;
  }
  const dismiss = intl.formatMessage({
    id: 'dismiss'
  });
  const messageIntl = intl.formatMessage({
    id: message
  });
  return (
    <div
      role="alertdialog"
      className={`notification notification--${type}`}
      arialabeledby="notification__message"
    >
      <button
        autofocus
        className="notification__close"
        onClick={clear}
        aria-label={dismiss}
      >
        &times;
      </button>
      <p className="notification__message" id="notification__message">
        {messageIntl}
      </p>
    </div>
  );
};

export default injectIntl(Notification);
