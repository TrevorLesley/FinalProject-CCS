import { Link } from 'react-router-dom';
import { Component } from 'react';
import NotesTab from './notesTab';
import './custom.css';

class Studenthomepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }


    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li> <Link exact to='/login'>Login</Link> </li>
                        <li> <Link exact to='/notes'>Notes</Link> </li>
                    </ul>
                </nav>
                <h1>Placeholder Homepage</h1>
                <div className="notes-window" >
                    <NotesTab />
                </div>
                <div className="profile-options" >
                    <button type='button' onClick={this.props.handleRender}>Edit Profile</button>
                    <button type='button' onClick={this.props.handleLogout}>Log Out</button>
                </div>
                </>
        )
    }

}

export default Studenthomepage