import React from 'react';
import { useParams } from 'react-router-dom';
import birds from './data';

function ShowBirds () {
    const info = useParams();

    let birdInfo = birds.find(bird => bird.name === info.name)
    

    return (
        <div>
            <div>{birdInfo.name}</div>
            <div>{birdInfo.genus}</div>
            <div>{birdInfo.conservationStatus}</div>
            <img src={birdInfo.image}/>
        </div>
    )
}

export default ShowBirds;