import { Component } from 'react';
import Login from './login';
import Registration from './registration';

class TitlePage extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        
        return (
            <>
                <div>I am the title page</div>
                <Login />
                <Registration/>
            </>
        )
    }
}

export default TitlePage;