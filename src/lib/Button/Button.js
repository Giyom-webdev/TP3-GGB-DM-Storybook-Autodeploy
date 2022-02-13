import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'antd';
import classes from './Button.module.css';

const button = ({size, type}) => (
  <Button type={type} size={size}>
    Soumettre
  </Button>
);

button.propTypes = {
  type: PropTypes.oneOf(['primary', 'default', 'dashed', 'text', 'link'])
    .isRequired,
  size: PropTypes.oneOf(['large', 'default', 'small']),
};

export default button;
