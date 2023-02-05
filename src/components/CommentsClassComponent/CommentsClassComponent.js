import {Component} from "react";

import {commentService} from "../../services";
import {CommentClassComponent} from "../CommentClassComponent/CommentClassComponent";
import css from './CommentsClassComponent.module.css';

class CommentsClassComponent extends Component{
    constructor(props) {
        super(props);
        this.state = {comments: []}
    }

    componentDidMount() {
        commentService.getAll().then(({data}) => this.setState({comments: data}));
    }

    render() {
        return (
            <div className={css.header}>
                <h1>COMMENTS:</h1>
                <div className={css.comments}>
                    {
                        this.state.comments.map(comment => <CommentClassComponent key={comment.id} comment={comment}/>)
                    }
                </div>
            </div>
        )
    }
}
export {CommentsClassComponent}