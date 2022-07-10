import React, { useState, useEffect } from 'react'
import Player from './components/Player';
import './index.css';
import SongsList from './SongsList';

function App()
{
  const [songs] = useState(SongsList());
  
  const [currentSongIndex, setCurrentSongIndex] = useState(0);                  // for setting current song index

  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);     // for setting the next song 

  useEffect(() =>
  {
    setNextSongIndex( ()=>
    {
      if (currentSongIndex + 1 > songs.length - 1)
      {
        return 0;
      }
      else
      {
        return currentSongIndex + 1;
      }

    })
  }, [currentSongIndex]);


  return (

    <div className="App">

        <Player
          currentSongIndex = {currentSongIndex}
          setCurrentSongIndex = {setCurrentSongIndex}
          nextSongIndex = {nextSongIndex}
          songs = {songs}
         />



    </div>
  )
}

export default App;
