import React, { Component } from ‘react’;
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    render() {
        return (
            <div>
                <h2>Comments:</h2>
                <CommentList data={ this.state.data } />
                <CommentForm />
            </div>
        )
    }
}
export default CommentBox;