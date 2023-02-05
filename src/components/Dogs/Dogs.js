import {useAppReducer} from "../../hooks";
import {Dog} from "../Dog/Dog";

const Dogs = () => {
    const [dogs] = useAppReducer((reducers) => reducers.dogReducer);
    return (
        <div>
            {
                dogs.map(dog => <Dog key={dog.idDog} dog={dog}/>)
            }
        </div>
    );
}
export {Dogs}