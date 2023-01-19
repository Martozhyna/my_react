import './SimpsonComponent.css'

export default function SimpsonComponent ({name,age,img}) {
    let classNameSimpsonsDiv = 'simpson';
    return (
        <div className={classNameSimpsonsDiv}>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <img src={img} alt={name}/>
        </div>
    );
}