import React from 'react';


function GifList(props) {
    const gifComps = props.gifs.map(
        gif => {
            return (
                <li key={gif.id}>
                    <img alt="" src={gif.images.original.url} />
                </li>)
        }
    )
    return (
        <ul>
            {gifComps}
        </ul>
    )
}

export default GifList;