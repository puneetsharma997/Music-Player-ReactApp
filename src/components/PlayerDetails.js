

function PlayerDetails({song, isPlaying})
{
    // console.log(song)
    return (
        <div className="c-player-details">
            <div 
            // animate={{ rotate: 360 }}
            // transition={{ 
            //     repeat: Infinity,
            //     repeatType: "loop",
            //     duration: 5
            //     }}
            className="details-img" >
            
                <img 
                    
                    src={song.img_src} alt="album_pic"
                />
            </div>

            <h3 className='details-title'>{song.title}</h3>

            <h4 className='details-artist'>{song.artist}</h4>

        </div>
    )
}

export default PlayerDetails
