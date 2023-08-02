import React, { useState } from "react";
import axios from "axios";

function SusFirstSkill(props) {
  const username = props.newUserData ? props.newUserData.name : "";
  const userId = props.newUserData ? props.newUserData.id : null;

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

export default SusFirstSkill;
