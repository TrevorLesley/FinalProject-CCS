import StudentRegistration from './studentregistration';
import Login from './login';
import Homepage from './studenthomepage';
import Cookies from 'js-cookie';
import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selection: !!Cookies.get('Authorization') ? `${true ? 'homepage' : 'nothomepage'}` : 'login'
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
          <div className='background'>
            {this.state.selection === 'login' && <Login handleLogin={this.handleLogin} handleRender={this.handleRender}/>}
            {this.state.selection === 'signup' && <StudentRegistration handleRegister={this.handleRegister} handleRender={this.handleRender}/>}
          {this.state.selection === 'homepage' && <Homepage handleRender={this.handleRender} handleLogout={this.handleLogout}/>}
          </div>
        </>
    );
  }
}

export default App;
