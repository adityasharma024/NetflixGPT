import React from 'react';
import { useSelector } from 'react-redux';
import VideoTile from './VideoTitle'; // Corrected file name
import VideoBackground from './VideoBackground';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if(movies==null) return;
  const mainMovie=movies[0];
 
  const {title,overview,id}=mainMovie;
  return (

    <div>
      <VideoTile title={title} overview={overview}  /> {/* Passing movies as a prop */}
      <VideoBackground movieId={id}/>
    </div>
  );
};

export default MainContainer;
