import { Component } from 'react';
import './App.css';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selection: 'home',
        }
    }


    render() {
        return (
            <>
                <h1>Placeholder Homepage</h1>
            <button type='button' onClick={this.props.handleLogout}>Log Out</button>
            </>
        )
    }

}

export default Homepage