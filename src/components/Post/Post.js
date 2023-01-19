function Post ({setPostDetails,...post}) {
    const {id, title,body} = post;
    return (
        <div>
            <h3> {id}. Title: {title}</h3>
            <button onClick={() => setPostDetails(post)}>Posts details</button>
        </div>
    )
}
export {Post}