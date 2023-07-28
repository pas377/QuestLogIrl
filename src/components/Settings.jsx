import { Link } from "react-router-dom";
function Settings() {
  return (
    <div className="center-container">
      <div className="content-container">
        {" "}
        {/* New parent container */}
        <div id="header">
          {" "}
          {/* Move the Quest Log title here */}
          <h1>Settings</h1>
        </div>
        <div id="smartphone">
          {" "}
          <div id="navigation">
            <ul>
              <li>
                <Link to="/">Edit User</Link>
              </li>
              <li>
                <Link to="/">Edit Summary</Link>
              </li>
              <li>
                <Link to="/user">Edit Quests</Link>
              </li>
              <li>
                <Link to="/settings">Edit Inventory</Link>
              </li>
              <li>
                <Link to="/">Back</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
