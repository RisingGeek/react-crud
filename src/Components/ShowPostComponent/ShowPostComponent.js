import React from 'react';
import { Link } from 'react-router-dom';

const ShowPostComponent = props => {
    return (
        <div className="container">
            <div className="row mt-3">
                <div className="col-sm-12 text-center">
                    <Link to={{pathname: '/'}} className="btn btn-success">Add a new Post</Link>
                </div>
            </div>
            <div className="row">
                {
                    props.posts.length ?
                    props.posts.map((post,index) => (
                        <div className="col-sm-12" key={post._id}>
                            <Link to={{pathname: `/posts/${index+1}`}}>
                                <h1>{post.title}</h1>
                                <h5>Author: {post.username}</h5>
                                <p>{post.body}</p>
                            </Link>
                            <hr />
                        </div>
                    )) :
                    <div className="col-sm-12 mt-3">
                        <h2 className="text-center">No posts yet.</h2>
                    </div>
                }
            </div>
        </div>
    );
}

export default ShowPostComponent;