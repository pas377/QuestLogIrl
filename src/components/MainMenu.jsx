import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function MainMenu(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!props.userData) {
      navigate("/sus-username");
    }
  }, [props.userData, navigate]);

  const username = props.userData ? props.userData.name : "";

  return (
    <div className="center-container">
      <div className="content-container">
        {" "}
        {/* New parent container */}
        <div id="header">
          {" "}
          {/* Move the Quest Log title here */}
          <h1>Quest Log</h1>
        </div>
        <div id="smartphone">
          {" "}
          {/* Apply the 'smartphone' ID */}
          <h2>Welcome {username}!</h2>
          <p>
            AuotoSummary to be displayed here! A description of the user, and an
            the gist of their main quest.
          </p>
          <div id="navigation">
            <ul>
              <li>
                <Link to="/main-quest">Main Quest</Link>
              </li>
              <li>
                <Link to="/side-quests-menu">Side Quests</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainMenu;
