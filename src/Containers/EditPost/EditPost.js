import React, { Component } from 'react';
import EditPostComponent from '../../Components/EditPostComponent/EditPostComponent';
import axios from 'axios';

class EditPost extends Component {
    state = {
        id: this.props.match.params.id,
        mongoID: '',
        username: '',
        title: '',
        body: '',
        error: false
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_PROXY}/getparticularpost/${this.state.id}`)
        .then(response => {
            this.setState({ 
                username: response.data.username,
                title: response.data.title,
                body: response.data.body,
                mongoID: response.data._id
            });
        }).catch(err => {
            alert('server error')
        })
    }
    setUsername = e => {
        this.setState({ username: e.target.value });
    }
    setTitle = e => {
        this.setState({ title: e.target.value });
    }
    setBody = e => {
        this.setState({ body: e.target.value });
    }
    editPost = () => {
        if(this.state.username && this.state.title && this.state.body) {
            this.setState({ error: false });
            axios.put(`${process.env.REACT_APP_PROXY}/editpost/${this.state.mongoID}`, {
                username: this.state.username,
                title: this.state.title,
                body: this.state.body
            }).then(response => {
                alert('post edited');
            }).catch(err => {
                alert('cannot edit post. Server error');
            })
        }
        else {
            this.setState({ error: true });
        }
    }
    render() {
        return (
            <EditPostComponent
            post={this.state.post}
            username={this.state.username}
            title={this.state.title}
            body={this.state.body}
            setUsername={this.setUsername}
            setTitle={this.setTitle}
            setBody={this.setBody}
            editPost={this.editPost}
            error={this.state.error} />
        );
    }
}

export default EditPost;