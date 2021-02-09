import React from 'react';
import Container from '../../components/Container/Container';

import { withTheme } from '../../../themes';

const Footer = ({ theme }) => {
  return (
    <Container theme={theme.footer.container} data-testid='footer-container'>
      Todo Lists
    </Container>
  );
}

export default withTheme(Footer);
