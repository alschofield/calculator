import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'schofield-common-components';
import { Calculator } from '../../app-components';
import { withTheme } from 'schofield-themes';

const Home = ({ theme }) => {
  return (
    <Container theme={theme.home.container} data-testid='home-container'>
      <Calculator theme={theme.home.calculator} />
    </Container>
  );
}

const mapStateToProps = (state) => {
  return ({ })
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default withTheme(connect(mapStateToProps, mapDispatchToProps)(Home))
