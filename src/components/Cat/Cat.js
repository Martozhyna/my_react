const Cat = ({cat}) => {
    const {id,name} = cat
    return (
        <div>
            <h3>{id}.{name}</h3>
        </div>
    )
}
export {Cat}