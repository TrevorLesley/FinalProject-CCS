import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Component } from 'react';
import './App.css';

class Studenthomepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: `homepage`,
        }
    }


    render() {
        return (
            <>
                <Navbar>
                    <ul>
                        <li> <Link exact to='/login'>Login</Link> </li>
                        <li> <Link exact to='/user-register'>Register</Link> </li>
                    </ul>
                </Navbar>
                <h1>Placeholder Homepage</h1>
                <button type='button' onClick={this.props.handleRender}>Edit Profile</button>
            <button type='button' onClick={this.props.handleLogout}>Log Out</button>
            </>
        )
    }

}

export default Studenthomepage