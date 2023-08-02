import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SusLogin from "./components/StartUpSequence/SusLogin";
import MainMenu from "./components/MainMenu";
import MainQuest from "./components/MainQuest";
import SideQuest from "./components/SideQuest";
import Settings from "./components/Settings";
import User from "./components/User";
import Inventory from "./components/Inventory";
import SkillsMenu from "./components/SkillsMenu";
import SideQuestsMenu from "./components/SideQuestsMenu";
import SusUsername from "./components/StartUpSequence/SusUsername";
import SusFirstQuest from "./components/StartUpSequence/SusFirstQuest";
import SusFirstSkill from "./components/StartUpSequence/SusFirstSkill";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [newUserData, setNewUserData] = useState(null);
  const [newUser, setNewUser] = useState(false);
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const handleUsernameSubmit = async () => {
    try {
      const res = await axios.get(
        `https://questlogirl-phillipspencera.b4a.run/users/name/${username}`
      );

      if (!res.data) {
        setNewUser(true);
        await handleNewUserSubmit();
      } else {
        console.log(res.data);
        setUserData(res.data);
        navigate("/main-menu");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewUserSubmit = async () => {
    try {
      const newUser = { name: username };
      const response = await axios.post(
        "https://questlogirl-phillipspencera.b4a.run/users/",
        newUser
      );

      console.log(response);

      if (response.data) {
        setNewUserData(response.data);
        navigate("/sus-first-quest");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUsernameFormSubmit = async (e) => {
    e.preventDefault();
    await handleUsernameSubmit();
  };

  return (
    <div>
      <Routes>
        <Route path="/sus-login" element={<SusLogin />} />
        <Route
          path="/sus-username"
          element={
            <SusUsername
              handleNewUserSubmit={handleNewUserSubmit}
              handleUsernameFormSubmit={handleUsernameFormSubmit}
              handleUsernameSubmit={handleUsernameSubmit}
              username={username}
              setUsername={setUsername}
              newUser={newUser}
              setNewUser={setNewUser}
            />
          }
        />
        <Route
          path="/sus-first-quest"
          element={<SusFirstQuest newUserData={newUserData} />}
        />
        <Route
          path="/sus-first-skill"
          element={<SusFirstSkill newUserData={newUserData} />}
        />
        <Route path="/main-menu" element={<MainMenu userData={userData} />} />
        <Route path="/main-quest" element={<MainQuest />} />
        <Route path="/side-quests-menu" element={<SideQuestsMenu />} />
        <Route path="/side-quest" element={<SideQuest />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user" element={<User />} />
        <Route path="/skills-menu" element={<SkillsMenu />} />
        <Route path="*" element={<Navigate to="/sus-username" />} />{" "}
        {/* Default route */}
      </Routes>
    </div>
  );
}

export default App;
