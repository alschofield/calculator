import React from 'react';
import { connect } from 'react-redux';
import { Container, Button } from 'schofield-common-components';
import { calculatorSlice } from '../Calculator/Calculator.slice';

const NumPad = ({ theme, update, clear }) => {
  return (
    <Container theme={theme.container} data-testid='numpad-container'>
      {
        ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '.'].map((item) => (
          <Button data-testid={`numpad-${item}`} key={item} theme={theme.button} onClick={(e) => update(item)}>{item}</Button>
        ))
      }
      <Button theme={theme.button} data-testid={`numpad-C`} onClick={(e) => clear()}>C</Button>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return ({})
}

const mapDispatchToProps = (dispatch) => {
  return {
    update: (s) => dispatch(calculatorSlice.actions.updatePlaceholder(s)),
    clear: () => dispatch(calculatorSlice.actions.clear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NumPad)
