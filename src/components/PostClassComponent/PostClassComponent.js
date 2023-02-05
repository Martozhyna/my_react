import {Component} from "react";

import css from './PostClassComponent.module.css';


class PostClassComponent extends Component{
    constructor(post) {
        super(post);
    }

    render() {
        return (
            <div className={css.post}>
                <h3>{this.props.post.id}. Title:{this.props.post.title}</h3>
                <p><b>Body:</b> {this.props.post.body}</p>
            </div>
        )
    }
}
export {PostClassComponent}