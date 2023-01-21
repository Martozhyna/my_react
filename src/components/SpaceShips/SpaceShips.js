import {useEffect, useState} from "react";

import './SpaceShips.css'
import {spaceShipService} from "../../services";
import {SpaceShip} from "../SpaceShip/SpaceShip";

function SpaceShips () {
    const [ships, setShips] = useState([]);

    useEffect(() => {
        spaceShipService.getAll().then(value => setShips(value.data.filter(value => value.launch_year !== 2020)));
    },[])
    return (
        <div className={'launches'}>
            {
                ships.map(launch => <SpaceShip key={launch.flight_number} launch={launch}/>)
            }
        </div>
    )
}
export {SpaceShips}