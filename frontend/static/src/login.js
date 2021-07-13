import { Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './App.css';
import Registration from './registration';

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
            <Navbar>
                <Link to='/user-register'>
                      <Registration/>  
                </Link>
            </Navbar>
            <Form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="username" id="username" className="form-label">Username</label>
                    <input type="text" className="form-control" id="username" name='username' onChange={this.handleInput}>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="text" className="form-control" name='email' id="email" onChange={this.handleInput}>
                    </input>
                </div>
                <div className="mb-3">
                    <label htmlFor="password1" className="form-label">Password</label>
                    <input type="current-password" className="form-control" name='password' id="password1" onChange={this.handleInput}>
                    </input>
                </div>   
                <button type="button" className="btn btn-link" onClick={() => this.props.handleRender('signup')}>Don't have an account? Sign up!</button>
                <button type="submit" className="btn btn-primary">Login</button>

            </Form>
            </>
        )}
}

export default Login