// import TitlePage from './titlepage';
import NotesTab from './notesTab';
import AddNote from './addNote';
import Cookies from 'js-cookie';
import { Component } from 'react';
import './App.css';
import {
  withRouter,
  Switch,
  Route,
} from "react-router-dom";

import StudentHomePage from './studenthomepage'
import Login from './login';
import Registration from './registration';
import NoteDetail from './noteDetail';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
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
      localStorage.setItem("owner", data.user.id);
      this.setState({ isLoggedIn: true });
      this.props.history.push("/");
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
      this.props.history.push("/login");
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
    const response = await fetch('/api/v1/users/users/', options);
    const data = await response.json().catch(handleError);

    if (response.ok) {
      Cookies.set('Authorization', `Token ${data.key}`);
      localStorage.setItem("owner", data.user.id);
      this.props.history.push("/");
    }

  }

  render() {
    return (
      
        <>
         <Switch>
            <Route path='/login'>
              <Login handleLogin={this.handleLogin} handleRender={this.handleRender} />
            </Route>
            <Route path='/register'>
              <Registration handleRegister={this.handleRegister} handleRender={this.handleRender} />
            </Route>
            <Route path='/' exact>
              <StudentHomePage handleLogout={this.handleLogout} />
            </Route>
            <Route path='/notes' exact>
              <NotesTab />
            </Route>
            <Route path='/notes/edit'>
              <NoteDetail />
            </Route>
            <Route path='/add-note'>
              <AddNote />
            </Route>
          </Switch>
        </>


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
