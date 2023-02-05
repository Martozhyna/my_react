import {Component} from "react";

import css from './CommentClassComponent.module.css';

class CommentClassComponent extends Component{
    constructor(comment) {
        super(comment);
    }

    render() {
        return (
            <div className={css.comment}>
                <h3>{this.props.comment.id}. Name: {this.props.comment.name}</h3>
                <p><b>Body:</b> {this.props.comment.body}</p>
                <p><b>Email:</b> {this.props.comment.email}</p>
            </div>
        )
    }
}
export {CommentClassComponent}