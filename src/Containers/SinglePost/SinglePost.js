import React, { Component } from 'react';
import axios from 'axios';
import SinglePostComponent from '../../Components/SinglePostComponent/SinglePostComponent';

class SinglePost extends Component {
    state = {
        post: {},
        id: this.props.match.params.id
    }
    componentDidMount() {
         axios.get(`${process.env.REACT_APP_PROXY}/getparticularpost/${this.state.id}`)
         .then(response => {
             this.setState({ post: response.data });
         }).catch(err => {
             alert('error getting post from server');
         })
    }
    render() {
        return (
            <SinglePostComponent
            post={this.state.post}
            id={this.state.id} />
        );
    }
}

export default SinglePost;