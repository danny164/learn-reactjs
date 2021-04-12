import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

// TODO 7.1. CONTINUE with the extra component
function Album(props) {
    // TODO 7.3.
    const { album } = props;

    return (
        <div className="album">
            <div className="album__thumbnail">
                <img src={album.thumbnailUrl} alt={album.name} />

                {/* Other controls then use css to position for it */}
            </div>
            <p className="album__name">{album.name}</p>
        </div>
    );
}

// TODO 7.2.
Album.propTypes = {
    album: PropTypes.object.isRequired, // ? Album must return an Object contains value from Album List
};

export default Album;
