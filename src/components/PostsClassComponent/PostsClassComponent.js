import {Component} from "react";

import {postService} from "../../services";
import {PostClassComponent} from "../PostClassComponent/PostClassComponent";
import css from './PostsClassComponent.module.css';

class PostsClassComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {posts: []}
    }

    componentDidMount() {
        postService.getAll().then(({data}) => this.setState({posts:data}));
    }

    render() {
        return (

            <div className={css.header}>
                <h1>POSTS</h1>

                <div className={css.posts}>
                    {
                        this.state.posts.map(post => <PostClassComponent key={post.id} post={post}/>)
                    }
                </div>
            </div>

        );
    }
}
export {PostsClassComponent}