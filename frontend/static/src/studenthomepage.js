import { Component } from 'react';
import './App.css';
import StudentEditProfile from './studentprofiledetail';

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
                <h1>Placeholder Homepage</h1>
                <button type='button' onClick={this.props.handleRender}>Edit Profile</button>
            <button type='button' onClick={this.props.handleLogout}>Log Out</button>
            </>
        )
    }

}

export default Studenthomepage