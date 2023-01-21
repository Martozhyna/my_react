function Post ({post}) {
    const {id, body, title} = post;
    return (
        <div>
            <h4>{id}. {body}</h4>
            <p><b>Title:</b> {title}</p>
        </div>
    );
}
export {Post}