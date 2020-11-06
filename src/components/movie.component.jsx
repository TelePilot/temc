import React from 'react'


const Movie = () => {
    return (
        <div>
            <video width='600' auto-play="true" controls>
                <source src='/media/SanityMovie.mp4' type='video/mp4' />
            </video>
        </div>
    )
}

export default Movie
