import React from 'react';
import { connect } from 'react-redux';
import { Container, Button } from '../../components';
import { calculatorSlice } from '../Calculator/Calculator.slice';

const Operators = ({ theme, add, subtract, multiply, divide }) => {
  return (
    <Container theme={theme.container} data-testid='operators-container'>
      {
        ['+', '-', '*', '/'].map((item) => (
          <Button key={item} theme={theme.button} onClick={(e) => {
            console.log(item)
            switch(item){
              case '+':
                add()
                break
              case '-':
                subtract()
                break
              case '*':
                multiply()
                break
              case '/':
                divide()
                break
              default:
                break
            }
          }}>{item}</Button>
        ))
      }
    </Container>
  );
}

const mapStateToProps = (state) => {
  return ({})
}

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(calculatorSlice.actions.add()),
    subtract: () => dispatch(calculatorSlice.actions.subtract()),
    multiply: () => dispatch(calculatorSlice.actions.multiply()),
    divide: () => dispatch(calculatorSlice.actions.divide())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Operators)
