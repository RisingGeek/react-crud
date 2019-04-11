import React, { Component } from 'react';
import AddPostComponent from '../../Components/AddPostComponent/AddPostComponent';
import axios from 'axios';

class AddPost extends Component {
    state = {
        username: '',
        title: '',
        body: '',
        error: false
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
    addPost = () => {
        if(this.state.username && this.state.title && this.state.body) {
            this.setState({ error: false });
            axios.post(`${process.env.REACT_APP_PROXY}/addpost`, {
                username: this.state.username,
                title: this.state.title,
                body: this.state.body
            }).then(response => {
                alert('Post Added');
                this.setState({ 
                    username: '',
                    title: '',
                    body: ''
                })
            }).catch(err => {
                alert('error! Post not added. Server error');
            })
        }
        else {
            this.setState({ error: true });
        }
    }
    render() {
        return (
            <AddPostComponent
            username={this.state.username}
            title={this.state.title}
            body={this.state.body}
            setUsername={this.setUsername}
            setTitle={this.setTitle}
            setBody={this.setBody}
            addPost={this.addPost}
            error={this.state.error} />
        );
    }
}

export default AddPost;