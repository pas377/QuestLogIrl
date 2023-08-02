import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SusFirstQuest(props) {
  const username = props.newUserData ? props.newUserData.name : "";
  const userId = props.newUserData ? props.newUserData.id : null;
  const navigate = useNavigate();
  const [questName, setQuestName] = useState("");
  const [statedPurpose, setStatedPurpose] = useState("");
  const [roadMarker1, setRoadMarker1] = useState("");
  const [roadMarker2, setRoadMarker2] = useState("");
  const [roadMarker3, setRoadMarker3] = useState("");

  const handleQuestSubmit = async (e) => {
    e.preventDefault();

    // Create a new quest object
    const newQuest = {
      id: Math.random(), // Or however you generate unique IDs
      name: questName,
      destination: statedPurpose,
      roadMarker1: roadMarker1,
      roadMarker2: roadMarker2,
      roadMarker3: roadMarker3,
    };

    // Update the user data with the new quest
    const updatedUser = {
      ...props.newUserData,
      mainQuest: newQuest,
    };

    // Call a function to save the updated data to the server
    try {
      const response = await axios.put(
        `https://questlogirl-phillipspencera.b4a.run/users${username}`,
        updatedUser
      );
      console.log("User updated with new quest", response);

      // navigate to the '/sus-first-skill' route
      navigate("/sus-first-skill");
    } catch (error) {
      console.error("Error updating user with new quest", error);
    }
  };

  const inputStyle = {
    color: "white",
    padding: "5px",
    fontSize: "16px",
    border: "2px solid #ccc",
    borderRadius: "4px",
    width: "100%",
    boxSizing: "border-box",
    backgroundColor: "transparent",
    textAlign: "center",
  };

  const buttonStyle = {
    ...inputStyle,
    borderRadius: "4px",
    width: "fit-content",
    padding: "5px 5px",
    marginTop: "15px",
  };

  const centerButton = {
    display: "flex",
    justifyContent: "center",
    padding: "5px 5px",
  };

  return (
    <div className="center-container">
      <div className="content-container"></div>
      <div id="smartphone">
        <h4> Ah, a new adventurer; Welcome {username}! </h4>
        <h4> What is the purpose of your quest? </h4>
        <form onSubmit={handleQuestSubmit}>
          {" "}
          <input
            type="text"
            value={statedPurpose}
            onChange={(e) => setStatedPurpose(e.target.value)}
            style={inputStyle}
          />
          <h4> Name your quest </h4>
          <input
            type="text"
            value={questName}
            onChange={(e) => setQuestName(e.target.value)}
            style={inputStyle}
          />
          <h4>
            {" "}
            Name three things you could do to bring you closer to your goal:{" "}
          </h4>
          <h5> Milestone: </h5>
          <input
            type="text"
            value={roadMarker1}
            onChange={(e) => setRoadMarker1(e.target.value)}
            style={inputStyle}
          />
          <h5> Milestone: </h5>
          <input
            type="text"
            value={roadMarker2}
            onChange={(e) => setRoadMarker2(e.target.value)}
            style={inputStyle}
          />
          <h5> Milestone: </h5>
          <input
            type="text"
            value={roadMarker3}
            onChange={(e) => setRoadMarker3(e.target.value)}
            style={inputStyle}
          />
          <div style={centerButton}>
            <input type="submit" value="Submit" style={buttonStyle} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SusFirstQuest;
