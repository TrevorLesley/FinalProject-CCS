import { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import NoteDetail from './noteDetail';

class NotesTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            notes: [],
        }
        this.renderEdit = this.renderEdit.bind(this);
    }

    
    
    componentDidMount() {
        fetch('api/v1/notes/noteslist/')
            .then(response => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => this.setState({ notes: data }));
        

    }

    renderEdit(event) {
        event.preventDefault();
    }

    render() {
        // console.log("this.props:", this.props)
    // const noteID = `${this.note.id}`
        const notes = this.state.notes.map((notes) => (
            <li>
                <h1> {notes.title} </h1>
                <p> {notes.body} </p>
                <NoteDetail note={this.state.note} />
            </li>
        ))
        return (
            <>
                <div>I'm notes tab - { this.props.match.params.id}
                </div>
                <ul>{notes}</ul>
            </>
        )
    }
}

export default withRouter(NotesTab)