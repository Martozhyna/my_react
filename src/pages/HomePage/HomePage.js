import {useContext} from "react";

import css from './HomePage.module.css';
import {MyContext} from "../../index";
import {Button} from "../../components";

const HomePage = () => {
    const context = useContext(MyContext);
    context.gender = 'female';
    Object.assign(context,{status: true})
    delete context.name
    return (
        <div className={css.home}>
            {context.name}.
            {context.gender}. Status: {context.status.toString()}
            <Button click={() => console.log('OH SOOO AMAZING')} style={{background:'snow'}}>click</Button>
        </div>
    );
}
export {HomePage}