import './RickAndMortyComponent.css'

export default function RickAndMortyComponent ({id,name,status,species,gender,image}) {
    let classNameRickAndMortyCharacters = 'persons'
    return (
        <div className={classNameRickAndMortyCharacters}>
            <h3>{id}. {name}</h3>
            <p>Status: {status}. Species: {species}. Gender: {gender}</p>
            <img src={image} alt={name}/>
        </div>
    )
}