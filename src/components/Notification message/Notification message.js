import React from 'react';
import css from './NotificationMessage.module.css';

class NotificationMessage extends React.Component {
  render() {
    return (
      <div className={css.notification}>
        <h3>There is no feedback</h3>
      </div>
    );
  }
}

export default NotificationMessage;
