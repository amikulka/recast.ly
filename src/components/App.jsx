import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import searchYouTube from '../lib/searchYouTube.js';
const {useState, useEffect} = React;

var App = () => {
  const blankList = [
    {
      id: {videoId: ''},
      snippet: {
        title: '',
        description: '',
        thumbnails: {
          default: {
            url: ''
          }
        }
      }
    }
  ];
  const [videoList, setVideoList] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  let debouncedSearchYouTube = _.debounce(searchYouTube, 500);

  let handleClick = function (video) {
    setCurrentVideo(video);
  };

  let handleSearch = function (currentEntry) {
    setSearchQuery(currentEntry);
    debouncedSearchYouTube(currentEntry, (data) => {
      setVideoList(data);
    } );
  };




  useEffect( () => {
    console.log('use effect was called');
    debouncedSearchYouTube(searchQuery, (data) => {
      setVideoList(data);
      setCurrentVideo(data[0]);
    });
    // 'react' will be the search string
  }, []);
  // will need searchString as depency

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search handleSearch={handleSearch}/></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer video={currentVideo} /></div>
        </div>
        <div className="col-md-5">
          <div><VideoList videos={videoList} handleClick={handleClick} /></div>
        </div>
      </div>
    </div>
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

