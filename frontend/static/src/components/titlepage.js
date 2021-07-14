import { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import Login from './login';
import Cookies from 'js-cookie';

class TitlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
          }
        //   this.handleLogout = this.handleLogout.bind(this);
          this.handleLogin = this.handleLogin.bind(this);
        }
      
        async handleLogin(user) {
          console.log('in handlelogin')
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
          console.log(response)
          const data = await response.json().catch(handleError);
          console.log(data)
          if (data.key) {
            Cookies.set('Authorization', `Token ${data.key}`);
            this.setState({ isLoggedIn: true });
          }
          
          
        }

    render() {
        
        return (
            <>
                <div>I am the title page</div>
                <Login handleLogin={this.handleLogin} />
                    {this.state.isLoggedIn ? <Redirect to="/studenthomepage" /> : console.log('nope')}
                {/* <Registration/> */}
            </>
        )
    }
}

export default TitlePage;