import { useState } from "react";
import axios from "axios";

function StartUp(props) {
  const [questName, setQuestName] = useState("");
  const [statedPurpose, setStatedPurpose] = useState("");
  const [skillName, setSkillName] = useState("");
  const [hours, setHours] = useState("");

  if (props.newUser) {
    return (
      <div className="center-container">
        <div className="content-container"></div>
        <div id="smartphone">
          <h1>Ah, a new adventurer! Welcome {props.username}</h1>
          <form onSubmit={props.handleNewUserSubmit}>
            <label>
              Quest Name:
              <input
                type="text"
                value={questName}
                onChange={(e) => setQuestName(e.target.value)}
              />
            </label>
            <label>
              Stated Purpose:
              <input
                type="text"
                value={statedPurpose}
                onChange={(e) => setStatedPurpose(e.target.value)}
              />
            </label>
            <label>
              Skill Name:
              <input
                type="text"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
              />
            </label>
            <label>
              Hours:
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />
            </label>
            <input type="submit" style={{ display: "none" }} />
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="center-container">
      <div className="content-container">
        <div id="smartphone">
          <h3>Welcome adventurer, tell us your name. </h3>
          <form onSubmit={props.handleUsernameFormSubmit}>
            <input
              value={props.username}
              onChange={(e) => props.setUsername(e.target.value)}
              style={{
                color: "white",
                padding: "5px",
                fontSize: "16px",
                border: "2px solid #ccc",
                borderRadius: "4px",
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "transparent",
                textAlign: "center",
              }}
            />
            <input type="submit" style={{ display: "none" }} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default StartUp;
