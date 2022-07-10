import { useEffect, useRef, useState } from 'react';
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';


function Player({currentSongIndex, setCurrentSongIndex, nextSongIndex, songs})
{

    // TO PLAY OR PAUSE THE AUDIO, WE ARE USING USEREF AND ISPLAYING TO CHECK IF AUDIO IS PLAYING OR NOT
    const audioElement = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() =>
    {
        if (isPlaying)
        {
            audioElement.current.play();
        }
        else
        {
            audioElement.current.pause();
        }
    });


    // FUNCTION TO GO TO FORWARD OR BACKWARD SONGS
    const skipSong = (forwards = true) =>
    {
        if (forwards)
        {
            setCurrentSongIndex( () =>
            {
                let temporary = currentSongIndex;
                temporary++;

                if (temporary > songs.length - 1)
                {
                    temporary = 0;
                }

                return temporary;
            })
        }
        else
        {
            setCurrentSongIndex( () =>
            {
                let temporary = currentSongIndex;
                temporary--;

                if (temporary < 0)
                {
                    temporary = songs.length - 1;
                }

                return temporary;
            })
        }
    }

    return (
        <div className="c-player">

            <h4>Playing Now</h4>

            <PlayerDetails song={songs[currentSongIndex]} isPlaying = {isPlaying}/>

            <PlayerControls 
                isPlaying = {isPlaying}
                setIsPlaying = {setIsPlaying}
                skipSong = {skipSong}
            />

            <audio 
                className='c-player-audio'
                src={songs[currentSongIndex].src}
                ref={audioElement}
                controls
                autoPlay loop>
            </audio>

            <p>
                <strong>Next Up: </strong>
                {songs[nextSongIndex].title} by {songs[nextSongIndex].artist}
            </p>

        </div>
    )
}

export default Player;
