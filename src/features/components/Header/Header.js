import React from 'react';
import styled from 'styled-components';

const Headers = {
  h1: styled.h1`
    position: ${props => props.theme.position || 'relative'};
    display: ${props => props.theme.display || 'block'};
    height: ${props => props.theme.height || 'auto'};
    min-height: ${props => props.theme.minHeight || 'auto'};
    width: ${props => props.theme.width || 'auto'};
    min-width: ${props => props.theme.minWidth || 'auto'};
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
    text-align: ${props => props.theme.textAlign || 'initial'};
  `,
  h2: styled.h2`
    position: ${props => props.theme.position || 'relative'};
    display: ${props => props.theme.display || 'block'};
    height: ${props => props.theme.height || 'auto'};
    min-height: ${props => props.theme.minHeight || 'auto'};
    width: ${props => props.theme.width || 'auto'};
    min-width: ${props => props.theme.minWidth || 'auto'};
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
    text-align: ${props => props.theme.textAlign || 'initial'};
  `,
  h3: styled.h3`
    position: ${props => props.theme.position || 'relative'};
    display: ${props => props.theme.display || 'block'};
    height: ${props => props.theme.height || 'auto'};
    min-height: ${props => props.theme.minHeight || 'auto'};
    width: ${props => props.theme.width || 'auto'};
    min-width: ${props => props.theme.minWidth || 'auto'};
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
    text-align: ${props => props.theme.textAlign || 'initial'};
  `,
  h4: styled.h4`
    position: ${props => props.theme.position || 'relative'};
    display: ${props => props.theme.display || 'block'};
    height: ${props => props.theme.height || 'auto'};
    min-height: ${props => props.theme.minHeight || 'auto'};
    width: ${props => props.theme.width || 'auto'};
    min-width: ${props => props.theme.minWidth || 'auto'};
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
    text-align: ${props => props.theme.textAlign || 'initial'};
  `,
  h5: styled.h5`
    position: ${props => props.theme.position || 'relative'};
    display: ${props => props.theme.display || 'block'};
    height: ${props => props.theme.height || 'auto'};
    min-height: ${props => props.theme.minHeight || 'auto'};
    width: ${props => props.theme.width || 'auto'};
    min-width: ${props => props.theme.minWidth || 'auto'};
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
    text-align: ${props => props.theme.textAlign || 'initial'};
  `,
  h6: styled.h6`
    position: ${props => props.theme.position || 'relative'};
    display: ${props => props.theme.display || 'block'};
    height: ${props => props.theme.height || 'auto'};
    min-height: ${props => props.theme.minHeight || 'auto'};
    width: ${props => props.theme.width || 'auto'};
    min-width: ${props => props.theme.minWidth || 'auto'};
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
    text-align: ${props => props.theme.textAlign || 'initial'};
    color: ${props => props.theme.color || 'initial'};
  `,
}

export default function Header(props) {
  const Item = Headers[props.type]

  return (
    <Item {...props}>
      { props.children }
    </Item>
  );
}

Header.defaultProps = {
  type: 'h1',
  'data-testid': 'header-container'
}
