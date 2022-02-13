import React from 'react';
import PropTypes from 'prop-types';
import {Button, notification} from 'antd';
import classes from './Notification.module.css';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const Notification = ({type}) => (
  <Button type={type} onClick={openNotification}>
    Open the notification box
  </Button>
);

Notification.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link'])
    .isRequired,
};

export default Notification;
