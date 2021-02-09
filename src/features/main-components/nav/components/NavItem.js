import React from 'react';
import Anchor from '../../../components/Anchor/Anchor';
import Button from '../../../components/Button/Button';
import Image from '../../../components/Image/Image';
import Icon from '../../../components/Icon/Icon';
import Container from '../../../components/Container/Container';
import Text from '../../../components/Text/Text';

import { withTheme } from '../../../../themes';

const NavItem = ({ type, value, ...props }) => {
  if (type === 'anchor') {
    return (
      <Anchor {...props}>
        <Text {...props}>{ value }</Text>
      </Anchor>
    );
  } else if (type === 'image') {
    return (
      <Anchor {...props}>
        <Image {...props} />
      </Anchor>
    );
  } else if (type === 'icon') {
    return (
      <Anchor {...props}>
        <Icon {...props} />
      </Anchor>
    );
  } else if (type === 'button') {
    return (
      <Button {...props}>
        <Text {...props}>{ value }</Text>
      </Button>
    );
  } else {
    return (
      <Container {...props}>
        <Text {...props}>{ value }</Text>
      </Container>
    );
  }
}

NavItem.defaultProps = {
  'data-testid': 'navitem-container'
}

export default withTheme(NavItem)
