import Login from './login';
import Registration from './registration';
import Cookies from 'js-cookie';
import { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: !!Cookies.get('Authorization') ? '' : 'login'
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRender = this.handleRender.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleLogin(user) {
    this.setState({ user: user.username});
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
     this.setState({selection: 'homepage'});
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
    if(response.ok) {
      Cookies.remove('Authorization');
      this.setState({selection: 'login'});
    }


  }

  handleRender(selection) {
    this.setState({selection});
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
      this.setState({ selection: 'homepage' });
    }

  }

  render() {
    return (
      <>
        
      <Router>
        <Switch>
            <Route exact path='/login'>
              <Login handleLogin={this.handleLogin} handleRender={this.handleRender} />
            </Route>
            <Route exact path='/user-register'>
              <Registration handleRegister={this.handleRegister} handleRender={this.handleRender} />
            </Route>
          </Switch>
          </Router>
        </>
    );
  }
}

export default App;
