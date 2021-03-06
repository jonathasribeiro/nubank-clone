import React from 'react';

import {Container, Top, Logo, Title} from './styles';

import logo from '~/assets/logo.png';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {
  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title>Jonathas</Title>
      </Top>
      <Icon name="keyboard-arrow-down" size={24} color="#fff" />
    </Container>
  );
}
