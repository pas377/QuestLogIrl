import React from "react";
import { Link } from "react-router-dom";

class SideQuestsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["sideQuest1", "sideQuest2", "sideQuest3"],
    };
  }

  render() {
    return (
      <div className="center-container">
        <div className="content-container">
          <div id="header">
            <h1>Side Quests</h1>
          </div>
          <div id="smartphone">
            <div id="navigation">
              {this.state.items.length === 0 ? (
                <p>RoadMarkers Empty</p>
              ) : (
                <ul className="RoadMarker">
                  {this.state.items.map((item, index) => (
                    <li
                      className="Road-Marker"
                      key={index}
                      onClick={(event) => console.log(event)}
                    >
                      {item}
                    </li>
                  ))}
                  <li>
                    <Link to="/main-menu">Back</Link>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideQuestsMenu;
