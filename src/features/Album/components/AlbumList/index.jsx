// TODO 4.
// **** Type rfcp
// ****
import React from 'react';
import PropTypes from 'prop-types';
import Album from '../Album';
import './styles.scss';

// ! Child Component to Render Data
// ****
function AlbumList(props) {
    // TODO 5.
    // * Declare props to get data from `Parent Container`
    // ****
    const { albumList } = props;

    return (
        // TODO 6. We have an ul tag and album-list class
        <ul className="album-list">
            {
                // * Traverse albumList array .map
                // * For each album, we have a JSX with an Album item
                // ****
                albumList.map((album) => (
                    <li key={album.id}>
                        <Album album={album} />
                    </li>
                )) // TODO 7.
            }
        </ul>
    );
}

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};

export default AlbumList;
