import TitlePage from './titlepage';
import Cookies from 'js-cookie';
import { Component } from 'react';
import './App.css';
import {
  withRouter,
  Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(user) {
    this.setState({ user: user.username });
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/login/', options);
    const data = await response.json().catch(handleError);
    if (data.key) {
      Cookies.set('Authorization', `Token ${data.key}`);
    }
  }

  async handleLogout() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/logout/', options).catch(handleError);
    if (response.ok) {
      Cookies.remove('Authorization');
    }


  }

  async handleRegister(user) {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body: JSON.stringify(user),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/rest-auth/registration/', options);
    const data = await response.json().catch(handleError);

    if (data.key) {
      Cookies.set('Authorization', `Token ${data.key}`);
      
    }

  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <TitlePage />
          </Route>
        </Switch>
      </Router>

    );
  }
}

export default withRouter(App);




/* <Router>
        <Switch>
            <Route exact path='/login'>
              <Login handleLogin={this.handleLogin} handleRender={this.handleRender} />
            </Route>
            <Route exact path='/user-register'>
              <Registration handleRegister={this.handleRegister} handleRender={this.handleRender} />
            </Route>
          </Switch>
          </Router> */
