// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import searchYouTube from './lib/searchYouTube.js';


// append app to document id 'app'

// I think this may be the make root step. ReactDOM.createRoot(document.querySelector( whatever indicates App .. "#app" perhaps))


ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));
