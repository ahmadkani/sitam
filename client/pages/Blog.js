import React from 'react';
import ReactPlayer from 'react-player'
import IconButton from '@material-ui/core/IconButton'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import DownloadLink from "react-download-link";



const Blog = () => {
  

  
  return (

    <div>
    <div className='player-wrapper'>
    <ReactPlayer
    className='react-player fixed-bottom'
    url= 'Mabel.ogg'
    width='100%'
    height='100%'
    controls = {true}

    />
    </div>
    
    <DownloadLink style={{'backgroundColor' : 'red'}}
    label="دانلود فیلم"
    filename="Mabel.ogg"
    exportFile={() => "My cached data"}
    ><button type="button" className="btn btn-info">Button</button></DownloadLink>

    </div>

    

  );

};

export default Blog;

