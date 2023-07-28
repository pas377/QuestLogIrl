import React, { useState } from "react";
import axios from "axios";

function SupFirstQuest(props) {
  const username = props.newUserData ? props.newUserData.name : "";
  const userId = props.newUserData ? props.newUserData.id : null;

  const [questName, setQuestName] = useState("");
  const [statedPurpose, setStatedPurpose] = useState("");

  const handleQuestSubmit = async (e) => {
    e.preventDefault();

    // Create a new quest object
    const newQuest = {
      id: Math.random(), // Or however you generate unique IDs
      name: questName,
      destination: statedPurpose,
      roadMarker1: null,
      roadMarker2: null,
      roadMarker3: null,
    };

    // Update the user data with the new quest
    const updatedUser = {
      ...props.newUserData,
      mainQuest: newQuest,
    };

    // Call a function to save the updated data to the server
    try {
      const response = await axios.put(
        `https://questlogirl-phillipspencera.b4a.run/users/${userId}`,
        updatedUser
      );
      console.log("User updated with new quest", response);
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
          <div style={centerButton}>
            <input type="submit" value="Submit" style={buttonStyle} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SupFirstQuest;
