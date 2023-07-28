function SusUsername(props) {
  return (
    <div className="center-container">
      <div className="content-container">
        <div id="smartphone">
          <h3>Welcome adventurer, tell us your name. </h3>
          <form onSubmit={(e) => props.handleUsernameFormSubmit(e)}>
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

export default SusUsername;
