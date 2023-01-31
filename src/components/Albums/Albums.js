import {useEffect, useState} from "react";

import {albumsService} from "../../services";
import {Album} from "../Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        albumsService.getAll().then(({data}) => setAlbums([...data]));
    }, []);
    return (
        <>
            {
                albums.map(value => <Album key={value.id} album={value}/>)
            }
        </>
    );
}
export {Albums}