import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux'
import Footer from './features/main-components/footer/Footer';
import Nav from './features/main-components/nav/Nav';
import Container from './features/components/Container/Container';
import Home from './features/pages/home/Home';
import './App.css';
import { ThemeProvider, themes } from './themes';
import store from './redux/store'

class App extends React.Component {
  state = {
    themeName: 'dark',
    theme: themes.dark
  };

  handleThemeToggle = () => {
    const name = (this.state.themeName === 'light') ? 'dark' : 'light';
    this.setState({ theme: themes[name], themeName: name });
  };

  render() {
    return (
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={this.state.theme}>
            <Container data-testid="app-container">
              <Nav handleThemeToggle={this.handleThemeToggle} />

              <Switch>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>

              <Footer />
            </Container>
          </ThemeProvider>
        </Provider>
      </Router>
    );
  }
}

export default App;
