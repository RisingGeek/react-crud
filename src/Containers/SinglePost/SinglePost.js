import React, { Component } from 'react';
import axios from 'axios';
import SinglePostComponent from '../../Components/SinglePostComponent/SinglePostComponent';

class SinglePost extends Component {
    state = {
        post: {}
    }
    componentDidMount() {
         axios.get(`${process.env.REACT_APP_PROXY}/getparticularpost/${this.props.match.params.id}`)
         .then(response => {
             this.setState({ post: response.data });
         }).catch(err => {
             alert('error getting post from server');
         })
    }
    render() {
        return (
            <SinglePostComponent
            post={this.state.post} />
        );
    }
}

export default SinglePost;