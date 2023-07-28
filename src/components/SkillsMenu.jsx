import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SkillsMenu() {
  const [skills, setSkills] = useState([]);
  const [newItem, setNewSkill] = useState("");
  const [isCreating, setIsCreating] = useState(false); // New state for controlling visibility of form
  const userId = 1; // replace with the actual user's id

  // Fetch SkillsMenu skills from the API when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${userId}`)
      .then((response) => {
        setSkills(response.data.SkillsMenu);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [userId]);

  // Handle changes to the new skill input field
  const handleNewSkillChange = (event) => {
    setNewSkill(event.target.value);
  };

  // Handle submission of the new skill form
  const handleNewSkillSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/users/${userId}/SkillsMenu`, {
        skill: newItem,
      })
      .then((response) => {
        setSkills([...skills, response.data]);
        setNewSkill(""); // Clear the input field
        setIsCreating(false); // Hide the form after skill creation
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  // Handle click on an skill (to delete it)
  const handleSkillClick = (skill) => {
    axios
      .delete(`http://localhost:8080/users/${userId}/SkillsMenu/${skill}`)
      .then((response) => {
        setSkills(skills.filter((i) => i !== skill));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="center-container">
      <div className="content-container">
        <div id="header">
          <h1>Skills</h1>
        </div>
        <div id="smartphone">
          <div id="navigation">
            {skills.length === 0 ? (
              <p>No skills yet</p>
            ) : (
              <ul className="SkillsMenu">
                {skills.map((skill, index) => (
                  <li
                    className="SkillsMenu-skill"
                    key={index}
                    onClick={() => handleSkillClick(skill)}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            )}
            {isCreating ? (
              <form onSubmit={handleNewSkillSubmit}>
                <input
                  type="text"
                  value={newItem}
                  onChange={handleNewSkillChange}
                  style={{
                    color: "white",
                    padding: "5px",
                    fontSize: "16px",
                    border: "2px solid #ccc",
                    borderRadius: "4px",
                    width: "100%" /* Set width to 100% to match container */,
                    boxSizing:
                      "border-box" /* Include padding in the width calculation */,
                    backgroundColor: "transparent",
                  }}
                />
                <input type="submit" value="Add Skill" />
              </form>
            ) : (
              <li>
                <a>
                  <button
                    style={{
                      color: "white",
                      padding: "2px 0px",
                      fontSize: "16px",
                      border: "none",
                      cursor: "pointer",
                      backgroundColor: "transparent",
                    }}
                    onClick={() => setIsCreating(true)}
                  >
                    Create Skill
                  </button>
                </a>
              </li>
            )}
            <li>
              <Link to="/user">Back</Link>{" "}
            </li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsMenu;
