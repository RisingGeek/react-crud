import React from 'react';
import { Link } from 'react-router-dom';

const SinglePostComponent = props => {
    return (
        <div className="container">
        {
            props.post ? (
            <div className="row">
                <div className="col-sm-12">
                    <h1>{props.post.title}</h1>
                    <h5>Author: {props.post.username}</h5>
                    <p>{props.post.body}</p>
                    <Link to={{pathname: '/posts/edit/'+props.id}}>Edit Post</Link>
                </div>
            </div> ) : ( <h1 className="text-center">Post Not Found</h1> )
        }
            <div className="row">
                <div className="col-sm-12 text-center">
                    <Link to={{pathname: '/posts'}} className="btn btn-success">Show All Posts</Link>
                    <Link to={{pathname: '/'}} className="btn btn-info">Add a new post</Link>
                </div>
            </div>
        </div>
    );
}

export default SinglePostComponent;