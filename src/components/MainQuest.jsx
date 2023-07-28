import { Link } from "react-router-dom";

function MainQuestMenu() {
  // Define items (or roadMarkers) here
  const items = ["roadMarker1", "roadMarker2", "roadMarker3"];

  return (
    <div className="center-container">
      <div className="content-container">
        {/* New parent container */}
        <div id="header">
          {/* Move the Quest Log title here */}
          <h1>Quest Name</h1>
        </div>
        <div id="smartphone">
          {/* Apply the 'smartphone' ID */}
          <p>Quest Summary to be displayed here!</p>
          <div id="navigation">
            {items.length === 0 ? (
              <p>RoadMarkers Empty</p>
            ) : (
              <ul className="RoadMarker">
                {items.map((item, index) => (
                  <li
                    className="Road-Marker"
                    key={index} // Use index as key or unique id if available
                    onClick={(event) => console.log(event)}
                  >
                    {item} {/* Display item here */}
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

export default MainQuestMenu;
