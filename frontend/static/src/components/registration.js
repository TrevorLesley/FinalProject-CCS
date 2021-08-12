import { Link } from 'react-router-dom';
import { Component } from 'react';

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTeacher: false,
            username: '',
            email: '',
            password1: '',
            password2: '',
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }

    handleInput(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleCheckbox(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: !event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleRegister(this.state);
    }

    render() {

        return (
            <>
                <nav>
                    <Link to='/login'>Login</Link>
                </nav>
                <form className="login-register" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="username" name="username" id="username" className="form-label">Username</label>
                        <input type="text" className="form-control" id="username" name='username' onChange={this.handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" name="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' id="email" onChange={this.handleInput} />
                    </div>
                    <div class="mb-3">
                        <label htmlFor="password1" name='password1' className="form-label">Password</label>
                        <input type="password" className="form-control" name='password1' id="password1" onChange={this.handleInput} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password2" name='password2' className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name='password2' id="password2" onChange={this.handleInput} />
                        <p>Check box if you are an instructor.</p>
                        <input type='checkbox' name='isTeacher' onChange={this.handleCheckbox}/><label for='isTeacher'>Instructor</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign Up</button>
                    <Link to="/login">Already have an account? Login!</Link>       
                </form>
            </>
        )
    }

}

                    

export default Registration