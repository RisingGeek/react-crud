import React, { Component } from 'react';
import axios from 'axios';
import ShowPostComponent from '../../Components/ShowPostComponent/ShowPostComponent';

class ShowPost extends Component {
    state = {
        posts: []
    }
    componentDidMount() {
        axios.get(`${process.env.REACT_APP_PROXY}/getposts`).then(response => {
            this.setState({ posts: response.data });
        })
    }
    render() {
        return (
            <ShowPostComponent
            posts={this.state.posts} />
        );
    }
}

export default ShowPost;