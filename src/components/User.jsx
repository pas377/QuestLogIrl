import { Link } from "react-router-dom";
function User() {
  return (
    <div className="center-container">
      <div className="content-container">
        {" "}
        {/* New parent container */}
        <div id="header">
          {" "}
          {/* Move the Quest Log title here */}
          <h1>User</h1>
        </div>
        <div id="smartphone">
          {" "}
          <p>
            AuotoSummary to be displayed here! A description of the user, and an
            the gist of their main quest.
          </p>
          <div id="navigation">
            <ul>
              <li>
                <Link to="/skills-menu">Skills</Link>
              </li>
              <li>
                <Link to="/inventory">Inventory</Link>
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

export default User;
