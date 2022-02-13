import React from 'react';
import PropTypes from 'prop-types';
import {Pagination} from 'antd';
import classes from './Pagination.module.css';

const pagination = ({simple}) => <Pagination defaultCurrent={1} total={50} simple={simple} />;

pagination.propTypes = {
  simple: PropTypes.bool,
};

export default pagination;
