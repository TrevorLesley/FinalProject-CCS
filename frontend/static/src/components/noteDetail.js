import { Component } from 'react';
import { Button } from 'react-bootstrap';
import Cookies from 'js-cookie';

class NoteDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            id: '',
            isHidden: true,
        }
        this.renderEdit = this.renderEdit.bind(this);
    }

    renderEdit(event) {
        // event.preventDefault();
        this.setState({ isHidden: !this.state.isHidden });
    }

    handleEdit(event) {
        event.preventDefault();



        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify()
        }
    }

    render() {



        return (
            <>
                {!!this.state.isHidden && <Button type='button' className='btn btn-outline-primary' onClick={this.renderEdit} >Edit</Button>}
                {!this.state.isHidden && <Button type='button' className="btn btn-outline-primary" onClick={() => { this.renderEdit(); this.handleEdit();}}>Submit</Button>}
            </>
        )
    }
}

export default NoteDetail;