import React from 'react';
import { connect } from 'react-redux';
import { Container, Input } from '../../components';
import { NumPad, Operators } from '../../app-components';

const Calculator = ({ theme, value, placeholder }) => {
  console.log(value)
  console.log(placeholder)
  console.log((placeholder) ? placeholder : value)

  return (
    <Container theme={theme.container} data-testid='calculator-container'>
      <Input theme={theme.input} type='text'  value={ (placeholder) ? placeholder : value } />
      <Container theme={theme.body}>
        <NumPad theme={theme.numpad} value={placeholder} />
        <Operators theme={theme.operators} value={placeholder} />
      </Container>
    </Container>
  );
}

const mapStateToProps = (state) => {
  console.log(state.calculator)

  return ({
    value: state.calculator.value,
    placeholder: state.calculator.placeholder
  })
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
