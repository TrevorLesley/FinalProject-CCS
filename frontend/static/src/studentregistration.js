import { Component } from 'react';

class StudentRegistration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            avatar: '',
            password1: '',
            password2: '',
        }


        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        this.props.handleRegister(this.state);
    }
    
    render() {

        return (
        <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
            <label htmlFor="username" name="username" id="username" className="form-label">Username</label>
            <input type="text" className="form-control" id="username" name='username' onChange={this.handleInput}>
            </input>
        </div>
        <div className="mb-3">
        <label htmlFor="email" name="email" className="form-label">Email address</label>
        <input type="text" className="form-control" name='email' id="email" onChange={this.handleInput}>
        </input>
        </div>
        <div class="mb-3">
            <label htmlFor="password1" name='password1' className="form-label">Password</label>
            <input type="password" className="form-control" name='password1' id="password1" onChange={this.handleInput}>
            </input>
            </div>
            <div className="mb-3">
            <label htmlFor="password2" name='password2' className="form-label">Confirm Password</label>
            <input type="password" className="form-control" name='password2' id="password2" onChange={this.handleInput}>
            </input>
        </div>
            <button type="button" className="btn btn-link" onClick={() => this.props.handleRender('login')}>Already have an account? Login!</button>
        <button type="submit" className="btn btn-primary">Sign Up</button>        
        </form>
        )}

}

export default StudentRegistration