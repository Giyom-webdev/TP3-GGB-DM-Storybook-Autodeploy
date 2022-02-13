import React from 'react';
import PropTypes from 'prop-types';
import {message, Button, Space} from 'antd';
import classes from './Message.module.css';

const success = () => {
  message.success('This is a success message');
};

const error = () => {
  message.error('This is an error message');
};

const warning = () => {
  message.warning('This is a warning message');
};

const Message = ({top}) => (
  <Space>
    <Button onClick={success} top={top}>
      Success
    </Button>
    <Button onClick={error} top={top}>
      Error
    </Button>
    <Button onClick={warning} top={top}>
      Warning
    </Button>
  </Space>
);

Message.propTypes = {
  top: PropTypes.number,
};

Message.defaultProps = {
  top: 8,
};

export default Message;
