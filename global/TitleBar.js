import React from 'react';
import PropTypes from 'prop-types';
import { Header, Left, Body, Right, Title } from 'native-base';

const TitleBar = ({title}) => (
  <Header>
    <Body>
      <Left />
      <Title>{title}</Title>
      <Right />
    </Body>
  </Header>
);

export default TitleBar;

TitleBar.propTypes = {
  title: PropTypes.string,
};
