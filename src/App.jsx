import { useState } from "react";
import "./App.css";
import AllPlayers from "./components/AllPlayers/AllPlayers";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  const [isActive, setIsActive] = useState(true);

  const handleClicked = (component) => {
    setIsActive(component);
  };
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayer = (player) => {
    const newPlayers = [...selectedPlayers, player];
    setSelectedPlayers(newPlayers);
  };

  const handleRemove = (id) => {
    const remaining = selectedPlayers.filter((player) => player.playerId !== id);
    setSelectedPlayers(remaining);
  };
  

  return (
    <>
      <Header />
      <AllPlayers
        isActive={isActive}
        handleRemove={handleRemove}
        selectedPlayers={selectedPlayers}
        handleSelectedPlayer={handleSelectedPlayer}
        handleClicked={handleClicked}
      />
      <Footer/>
    </>
  );
}

export default App;
