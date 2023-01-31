import {Albums} from "../../components";
import css from './AlbumPage.module.css';

const AlbumsPage = () => {
    return (
        <div className={css.albums}>
            <Albums/>
        </div>
    )
}
export {AlbumsPage}