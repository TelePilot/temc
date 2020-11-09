import React from 'react'


const Movie = () => {
    return (
        <div>
            <video width='600' controls>
                <source src='/media/SanityMovie.mp4' type='video/mp4' />
            </video>
        </div>
    )
}

export default Movie
