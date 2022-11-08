var VideoListEntry = ({video, handleClick}) => {
  let thumbnailURL = video.snippet.thumbnails.default.url;
  let videoTitle = video.snippet.title;
  let videoDescription = video.snippet.description;


  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={thumbnailURL} alt="" />
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={() => {
          handleClick(video);
        }}>{videoTitle}</div>
        <div className="video-list-entry-detail">{videoDescription}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;

/*
{
  "kind": "youtube#searchResult",
  "etag": "bwdNgV-HSrz_Ep5y0UQTEE9c7f4",
  "id": {
    "kind": "youtube#video",
    "videoId": "dYh6R4Jhxoo"
  },
  "snippet": {
    "publishedAt": "2020-11-24T17:00:10Z",
    "channelId": "UC0v-tlzsn0QZwJnkiaUSJVQ",
    "title": "Kids React To Adult Jokes In Kids&#39; Shows (SpongeBob, Animaniacs, Steven Universe &amp; More!)",
    "description": "Kids React to adult jokes in kids' TV shows (SpongeBob, StevenUniverse, and more!) Check out previous episodes of this series here! https://bit.ly/39a6Zli Join ...",
    "thumbnails": {
      "default": {
        "url": "https://i.ytimg.com/vi/dYh6R4Jhxoo/default.jpg",
        "width": 120,
        "height": 90
      },
      "medium": {
        "url": "https://i.ytimg.com/vi/dYh6R4Jhxoo/mqdefault.jpg",
        "width": 320,
        "height": 180
      },
      "high": {
        "url": "https://i.ytimg.com/vi/dYh6R4Jhxoo/hqdefault.jpg",
        "width": 480,
        "height": 360
      }
    },
    "channelTitle": "REACT",
    "liveBroadcastContent": "none",
    "publishTime": "2020-11-24T17:00:10Z"
  }
} */