import { Link } from 'react-router-dom';
import { Component } from 'react';
import './App.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleLogin(this.state);
    }
    
    render() {

        return (
            <>
            <nav>
                <Link to='/register'>
                      Register  
                </Link>
            </nav>
            <form className="login-register" onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" id="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name='username' onChange={this.handleInput} />
                   
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" className="form-control" name='email' id="email" onChange={this.handleInput} />
                  
                </div>
                <div className="mb-3">
                    <label htmlFor="password1" className="form-label">Password</label>
                    <input type="current-password" className="form-control" name='password' id="password1" onChange={this.handleInput} />
                 
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <Link to="/register">Don't have an account? Sign up!</Link>

            </form>
            </>
        )}
}

export default Login