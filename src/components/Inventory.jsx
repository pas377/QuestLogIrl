import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Inventory() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [isCreating, setIsCreating] = useState(false); // New state for controlling visibility of form
  const userId = 1; // replace with the actual user's id

  // Fetch inventory items from the API when the component mounts
  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${userId}`)
      .then((response) => {
        setItems(response.data.inventory);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, [userId]);

  // Handle changes to the new item input field
  const handleNewItemChange = (event) => {
    setNewItem(event.target.value);
  };

  // Handle submission of the new item form
  const handleNewItemSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/users/${userId}/inventory`, {
        item: newItem,
      })
      .then((response) => {
        setItems([...items, response.data]);
        setNewItem(""); // Clear the input field
        setIsCreating(false); // Hide the form after item creation
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  // Handle click on an item (to delete it)
  const handleItemClick = (item) => {
    axios
      .delete(`http://localhost:8080/users/${userId}/inventory/${item}`)
      .then((response) => {
        setItems(items.filter((i) => i !== item));
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="center-container">
      <div className="content-container">
        <div id="header">
          <h1>Inventory</h1>
        </div>
        <div id="smartphone">
          <div id="navigation">
            {items.length === 0 ? (
              <p>Inventory Empty</p>
            ) : (
              <ul className="inventory">
                {items.map((item, index) => (
                  <li
                    className="inventory-item"
                    key={index}
                    onClick={() => handleItemClick(item)}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {isCreating ? (
              <form onSubmit={handleNewItemSubmit}>
                <input
                  type="text"
                  value={newItem}
                  onChange={handleNewItemChange}
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
                <input type="submit" value="Add Item" />
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
                    Create Item
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

export default Inventory;
