import css from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={css.home}>
            <div>
                <h1>Welcome to the HomePage</h1>
            </div>
            <div className={css.father}>
                <div className={css.card}>
                    <div className={css.description}>
                        <h2>Modern design</h2>
                        <p>Unique elegance, incredible comfort, soft forms, modern design, affordable price and fast
                            delivery</p>
                    </div>
                    <div className={css.button}>
                        <button>Learn more</button>
                    </div>
                </div>

                <div className={css.card}>
                    <div className={css.description}>
                        <h2>Affordable price</h2>
                        <p>Unique elegance, incredible comfort, soft forms, modern design, affordable price and fast
                            delivery</p>
                    </div>
                    <div className={css.button}>
                        <button>Learn more</button>
                    </div>
                </div>
                <div className={css.card}>
                    <div className={css.description}>
                        <h2>Fast delivery</h2>
                        <p>Unique elegance, incredible comfort, soft forms, modern design, affordable price and fast
                            delivery</p>
                    </div>
                    <div className={css.button}>
                        <button>Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export {HomePage}