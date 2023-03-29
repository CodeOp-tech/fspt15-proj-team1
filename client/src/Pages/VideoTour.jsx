import React from "react";

function VideoTour() {
  return <div>
    {/* the source obviously shows the source while the track can provide subtitles, the *controls* attribute makes sure that there is a standard playback controls (play/pause, volume, etc.) for the video.  */}
      <div> <video controls>
        <source src="https://www.youtube.com/watch?v=nCVYEqc_Hw4&t=209s" type="video/mp4" />
        <track label="English" kind="subtitles" srcLang="en" src="example.vtt" />
      </video>
      </div>
      <div> <video controls>
        <source src="https://www.youtube.com/watch?v=nCVYEqc_Hw4&t=209s" type="video/mp4" />
        <track label="English" kind="subtitles" srcLang="en" src="example.vtt" />
      </video>
      </div>
      <div> <video controls>
        <source src="https://www.youtube.com/watch?v=nCVYEqc_Hw4&t=209s" type="video/mp4" />
        <track label="English" kind="subtitles" srcLang="en" src="example.vtt" />
      </video>
      </div>
      <div> <video controls>
        <source src="https://www.youtube.com/watch?v=nCVYEqc_Hw4&t=209s" type="video/mp4" />
        <track label="English" kind="subtitles" srcLang="en" src="example.vtt" />
      </video>
      </div>
  </div>;
}

export default VideoTour;
