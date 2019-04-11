import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const EditPostComponent = props => {
    return (
        <div className="container">
            <h1 className="text-center">Edit Post</h1>
            {
                props.username ? 
            <Fragment>
            <div className="row">
                <div className="col-sm-4">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Username" 
                    value={props.username}
                    onChange={e => props.setUsername(e)} />
                    {
                        props.error && !props.username ?
                        <p className="text-danger">Username can't be empty</p> : null
                    }
                </div>
                <div className="col-sm-4">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Title" 
                    value={props.title}
                    onChange={e => props.setTitle(e)} />
                    {
                        props.error && !props.title ?
                        <p className="text-danger">Title can't be empty</p> : null
                    }
                </div>
                <div className="col-sm-4">
                    <input type="text" 
                    className="form-control" 
                    placeholder="Body"
                    value={props.body} 
                    onChange={e => props.setBody(e)} />
                    {
                        props.error && !props.body ?
                        <p className="text-danger">Username can't be empty</p> : null
                    }
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-12 text-center">
                    <button className="btn btn-primary" onClick={props.editPost}>Edit Post</button>
                </div>
            </div>
            </Fragment> : <h1 className="text-center">Post Not Found</h1>
            }
            <div className="row mt-3">
                <div className="col-sm-12 text-center">
                    <Link to={{pathname: '/posts'}} className="btn btn-success">See all Posts</Link>
                    <Link to={{pathname: '/'}} className="btn btn-info">Add a new post</Link>
                </div>
            </div>
        </div>
    );
}

export default EditPostComponent;