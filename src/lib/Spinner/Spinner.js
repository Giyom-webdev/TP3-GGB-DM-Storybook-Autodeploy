import React from 'react';
import PropTypes from 'prop-types';
import {Spin} from 'antd';
import classes from './Spinner.module.css';

const spinner = ({size}) => <Spin size={size} />;

spinner.propTypes = {
  size: PropTypes.oneOf(['large', 'default', 'small']),
};

export default spinner;
