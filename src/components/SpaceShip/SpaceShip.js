import './SpaceShip.css';

function SpaceShip (props) {
    const {launch} = props;
    return (
        <div className={'launch'}>
            <h3>{launch.flight_number}. {launch.mission_name}</h3>
            <p><b>Launch year:</b> {launch.launch_year}</p>
            <img src={launch.links.mission_patch_small} alt={launch.mission_name}/>
        </div>
    )
}
export {SpaceShip}