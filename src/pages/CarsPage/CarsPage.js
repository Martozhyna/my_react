import {useSelector} from "react-redux";

import {CarForm, Cars} from "../../components";

const CarsPage = () => {
    const {loading} = useSelector(state => state.cars);
    return (
        <div className="App">
            <div className='CarForm'>
                <CarForm/>
            </div>
            <hr/>
            {loading && <h1>LOADING....</h1>}
            <div>
                <Cars/>
            </div>

        </div>
    );
}
export {CarsPage}