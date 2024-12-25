import React from 'react';
import {tracklist} from "../tracklist.js";


const ArtistImg = ({name}) => {
    const img = (src, className) => <img className={`artist-logo ${className}`} src={`src/images/${src}`}/>

    switch (name) {
        case 'Laritovski': {
            return img('laritovski.svg', 'lari')
        }
        case 'Suno': {
            return img('suno.svg')
        }
        default: return <div className='artist-logo'>{name}</div>
    }
}

const Artists = ({names}) => {
    return <div className='artist-logos'>
        {
            names.map((name, index) => <>
                <ArtistImg name={name}/>
                {
                    index !== names.length - 1 && <div className='and'>&</div>
                }
            </>)
        }
    </div>
}

const SongBlock = ({index}) => {
    const songInfo = tracklist[index];

    return (
        <div className='song'>
            <div className='song__main'>
                <div className='song__name'>
                    {songInfo.name}
                </div>
                <Artists names={songInfo.artists?.main}/>
                {songInfo.artists?.feat && <div className='feat'>
                    <div>feat. </div>
                    <Artists names={songInfo.artists?.feat}/>
                </div>}
            </div>
            <img className='song__image' src={`src/images/${songInfo.img}`}/>
        </div>
    );
};

export default SongBlock;