import { Component } from 'react';
import Cookies from 'js-cookie';

class AddNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const note = {
            title: this.state.title,
            body: this.state.body
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken'),
            },
            body: JSON.stringify(note),
        };

        fetch('/api/v1/notes/noteslist/', options)
            .then(response => response.json());
    }

    handleInput(event) {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <>
                <div className="note-form" >
                    <form onSubmit={this.handleSubmit} >
                        <div>
                            <input className="note-form-title" type="text" placeholder="Note Title" name="title" id="title" onChange={this.handleInput} />
                        </div>
                        <div>
                            <input className="note-form-body" type="text" placeholder="Your note here." name="body" id="body" onChange={this.handleInput} size="300px" />
                        </div>
                        <button type="submit" className="note-submit-button" >Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default AddNote