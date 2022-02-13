import React from 'react';
import PropTypes from 'prop-types';
import {Result, Button} from 'antd';
import classes from './Error404.module.css';

const error404 = ({status, title, subTitle}) => (
  <Result
    status={status}
    title={title}
    subTitle={subTitle}
    extra={<Button type="primary">Back Home</Button>}
  />
);

error404.propTypes = {
  status: PropTypes.oneOf(['404', '500']).isRequired,
  title: PropTypes.oneOf(['404', '500']),
  subTitle: PropTypes.oneOf([
    'Sorry, the page you visited does not exist.',
    'Sorry, something went wrong.',
  ]),
};

export default error404;
