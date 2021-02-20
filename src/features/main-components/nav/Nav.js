import React from 'react';
import NavItem from './components/NavItem.js';
import Container from '../../components/Container/Container';
import { withTheme } from '../../../themes';

const Nav = ({theme, handleThemeToggle }) => {
  return (
    <Container theme={theme.nav.container} data-testid='nav-container'>
      <NavItem theme={theme.nav.item} type='image' src={`${process.env.PUBLIC_URL}/scho-logo.png`} href='https://portfolio-nvjl35cjm.vercel.app/' />
      <NavItem theme={theme.nav.item} type="anchor" value="Calculator" href="/" />
      <NavItem theme={theme.nav.item} type="anchor" value="Todos App" href="https://todolist-app-eight.vercel.app/" />
      <NavItem theme={theme.nav.item} type='icon' icon='paint' onClick={handleThemeToggle} />
    </Container>
  );
}

export default withTheme(Nav)
