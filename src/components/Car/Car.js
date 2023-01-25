import {carService} from "../../sevices";

function Car ({car,setUpdateCar,setCars}) {
    const {id, brand, price, year} = car;


    const deleteCar = async () => {
      await carService.deleteById(id)
         setCars(cars => {
             const carIndex = cars.findIndex(value => value.id === id);
             cars.splice(carIndex, 1);
             return [...cars];
        });


    };

    return (
        <div>
            <p><b>Id:</b> {id}. <b>Brand:</b> {brand}</p>
            <p><b>Price:</b> {price}. <b>Year</b> {year}</p>
            <button onClick={() => setUpdateCar(car)}>Update</button>
            <button onClick={() => deleteCar()}>Delete</button>

        </div>
    );
}
export {Car}