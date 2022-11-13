import React from 'react';
import birds from './data';
import { Link } from 'react-router-dom';

function HomePage () {

    let list = birds.map(item => {
        return(
            <Link to={'/Show/' + item.name}>
                <img src={item.image}/>
            </Link>
        )
    })

    return(
        <div>
            <div>{list}</div>
        </div>
    )
}

export default HomePage;