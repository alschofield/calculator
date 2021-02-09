import React from 'react';
import styled from 'styled-components';

const Item = styled.img`
  position: ${props => props.theme.position || 'relative'};
  display: ${props => props.theme.display || 'initial'};
  height: ${props => props.theme.height || 'auto'};
  min-height: ${props => props.theme.minHeight || 'auto'};
  width: ${props => props.theme.width || 'auto'};
  min-width: ${props => props.theme.minWidth || '40px'};
  padding: ${props => props.theme.padding || '0px'};
  padding-top: ${props => props.theme.paddingTop || '0px'};
  padding-right: ${props => props.theme.paddingRight || '0px'};
  padding-bottom: ${props => props.theme.paddingBottom || '0px'};
  padding-left: ${props => props.theme.paddingLeft || '0px'};
  margin: ${props => props.theme.margin || '0px'};
  margin-top: ${props => props.theme.marginTop || '0px'};
  margin-right: ${props => props.theme.marginRight || '0px'};
  margin-bottom: ${props => props.theme.marginBottom || '0px'};
  margin-left: ${props => props.theme.marginLeft || '0px'};
  top: ${props => props.theme.top || 'initial'};
  left: ${props => props.theme.left || 'initial'};
  right: ${props => props.theme.right || 'initial'};
  bottom: ${props => props.theme.bottom || 'initial'};
  z-index: ${props => props.theme.zIndex || 'initial'};
  justify-content: ${props => props.theme.justifyContent || 'initial'};
  align-items: ${props => props.theme.alignItems || 'initial'};
  background: ${props => props.theme.background || 'initial'};
  background-color: ${props => props.theme.backgroundColor || 'initial'};
  background-position: ${props => props.theme.backgroundPosition || 'initial'};
  background-size: ${props => props.theme.backgroundSize || 'initial'};
  background-repeat: ${props => props.theme.backgroundRepeat || 'initial'};
  color: ${props => props.theme.color || 'initial'};
`;

export default function Image(props) {
  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Image.defaultProps = {
  'data-testid': 'image-container'
}
