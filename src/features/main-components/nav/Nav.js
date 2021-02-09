import React from 'react';
import NavItem from './components/NavItem.js';
import Container from '../../components/Container/Container';
import { withTheme } from '../../../themes';

const Nav  = ({theme, handleThemeToggle }) => {
  return (
    <Container theme={theme.nav.container} data-testid='nav-container'>
      <NavItem theme={theme.nav.item} type='image' src={`${process.env.PUBLIC_URL}/scho-logo.png`} href='/' />
      {/* <NavItem type="anchor" value="Merch" href="https://scho.clothing" /> */}
      <NavItem theme={theme.nav.item} type='icon' icon='paint' onClick={handleThemeToggle} />
    </Container>
  );
}

export default withTheme(Nav)
