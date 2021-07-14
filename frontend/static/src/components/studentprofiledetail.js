import { Component } from 'react';

class StudentEditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            avatar: '',
            email: '',
            password1: '',
            password2: '',
            selection: 'StudentEdit',
        }
        this.handleEdit = this.handleEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.handleEdit(this.state);
    }

    handleEdit(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {

        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='username' onChange={this.handleInput}>Name</input>
                    <input type='text' name='email' onChange={this.handleInput}>Email</input>
                    <input type='text' name='password1' onChange={this.handleInput}>Password</input>
                    <input type='text' name='password2' onChange={this.handleInput}>Confirm Password</input>
                </form>
            </>
        )
    }

}

export default StudentEditProfile