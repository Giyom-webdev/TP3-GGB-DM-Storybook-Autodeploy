import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'antd';
import classes from './Card.module.css';

const card = ({size}) => (
  <Card
    title="Exemple de carte"
    extra={<a href="#">More</a>}
    style={{width: 300}}
    size={size}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);

card.propTypes = {
  size: PropTypes.oneOf(['default', 'small']),
};

export default card;
