import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movies}) => {
    console.log(movies);
  return (
    <div className='px-2 '>
        <h1 className='text-3xl text-white py-6'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            
            <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
        </div>
      

    </div>
  )
}

export default MovieList