import YouTube from 'react-youtube';

const opts = {
  height: '390',
  width: '640',
  host: 'http://www.youtube.com',
  playerVars:{ 
    'autoplay': 1,
    // 'controls': 0,
    // 'autohide': 1,
    // 'wmode': 'opaque',
    'origin': window.location.origin
  }
};


export const MediaEvento = ({item, index}) => {
  console.log(item)
  return (
    <>
      {/* <YouTube videoId={item.media_json} opts={opts}  /> */}
      {/* <iframe
                key={index}
                width="425"
                height="425"
                src={item.media_json}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                
              ></iframe> */}
      
    </>
  )
}