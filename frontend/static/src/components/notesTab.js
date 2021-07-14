import { Component } from 'react';
import { useParams, withRouter, Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import NoteDetail from './noteDetail';

class NotesTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            notes: [],
        }
    }

    
    componentDidMount() {
        fetch('api/v1/users/notes')
            .then(response => response.json())
            .then(data => this.setState({ notes: data }));
        
        

    }


    render() {
        // console.log("this.props:", this.props)
    // const noteID = `${this.note.id}`
        const notes = this.state.notes.map((notes) => (
            <NoteDetail />
        ))
        return (
            <>
                <Navbar>
                    <Link to='/'>Home</Link>
                </Navbar>
                <div>I'm notes tab - { this.props.match.params.id}
                </div>
            </>
        )
    }
}

export default withRouter(NotesTab)