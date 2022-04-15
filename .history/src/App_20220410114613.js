import "./App.css";
import { dataInfor } from "./youtube/dataInfor.js";

function App() {
  return (
    <div>
      
    </div>
  );
}

function YoutubeItem(props) {
  return (
    <div className="youtube-list">
      <div className="youtube-image">
        <img src={props.image} alt="" className="youtube-avatar" />
      </div>
      <div className="youtube-footer">
        <img src={props.avatar} alt="" className="face" />
        <div className="youtube-info">
          <h3 className="youtube-title">
            {props.title || "This is example of title"}
          </h3>
          <h4 className="youtube-author">
            {props.author || "This is example of author name"}
          </h4>
        </div>
      </div>
    </div>
  );
}
export default App;
