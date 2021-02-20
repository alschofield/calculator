import React from 'react';
import NavItem from './components/NavItem.js';
import Container from '../../components/Container/Container';
import { withTheme } from '../../../themes';

const Nav = ({theme, handleThemeToggle }) => {
  return (
    <Container theme={theme.nav.container} data-testid='nav-container'>
      <NavItem theme={{ ...theme.nav.item, ...theme.nav.icon }} type='image' src={`${process.env.PUBLIC_URL}/scho-logo.png`} href='https://portfolio.alschofield.vercel.app/' />
      <Container theme={theme.nav.linksContainer}>
        <NavItem theme={{ ...theme.nav.item, ...theme.nav.link }} type="anchor" value="Calculator" href="/" />
        <NavItem theme={{ ...theme.nav.item, ...theme.nav.link }} type="anchor" value="Todos App" href="https://todolist.alschofield.vercel.app/" />
      </Container>
      <NavItem theme={theme.nav.item} type='icon' icon='paint' onClick={handleThemeToggle} />
    </Container>
  );
}

export default withTheme(Nav)
