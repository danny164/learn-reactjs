// TODO 1.
// **** Type rfcp
// *****************
import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

// ! AlbumFeature Parent Container
// *******
function AlbumFeature(props) {
    // TODO 2.
    // * Create an array with objects named albumList
    // * contains id, name, thumbnailUrl
    // ****
    const albumList = [
        {
            id: 1,
            name: 'Top 100 Nhạc Trữ Tình Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/1/0/f/610f6b9b6d694034c23e4ef48e4ad7b8.jpg',
        },
        {
            id: 2,
            name: 'Top 100 Pop Âu Mỹ Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/b/c/b/dbcb684ed2319a6333917085312999c9.jpg',
        },
        {
            id: 3,
            name: 'Top 100 Bài Hát Nhạc Trẻ Hay Nhất',
            thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/5/4/e/4/54e47c54df51c2ee17ca391a556b790a.jpg',
        },
    ];

    // TODO 3. Create a file named AlbumList
    // ? Hey! AlbumList, I have an album list, help me to render data
    return (
        <div>
            <h2>Playlist nghe là thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    ); // **** OK, sir!!! I hold it
}

AlbumFeature.propTypes = {};

export default AlbumFeature;
