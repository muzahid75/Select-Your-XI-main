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

  const [price,setPrice]=useState(0);

  const handlePrice =()=>{
    const newPrice = price+6000000;
    setPrice(newPrice)
  }

  const handleAddMOney=(p)=>{
    if(price<p){
      alert("Not enouggh money")
      return;
    }
    const newMoney = price - p;
    setPrice(newMoney)
  }
  const handleReduceMoney=(id)=>{
    const reduce = selectedPlayers.find(player => player.playerId === id)
    const newMoney = price + reduce.biddingPrice;
    setPrice(newMoney)
  }

  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectedPlayer = (player) => {
    const exist = selectedPlayers.find(p =>p.playerId === player.playerId)
    // const numberOfItem= 
    if(exist){
      alert("Already added");
      return;
    }
    if (selectedPlayers.length >= 6) {
      alert("You can't add more than 6 players");
      return;
    }  
    if(price<player.biddingPrice){
      alert("Not enouggh money")
      return;
    }
    else{
      handleAddMOney(player.biddingPrice)
      const newPlayers = [...selectedPlayers, player];
      setSelectedPlayers(newPlayers);
    }
    
  };

  const handleRemove = (id) => {
    handleReduceMoney(id);
    const remaining = selectedPlayers.filter((player) => player.playerId !== id);
    setSelectedPlayers(remaining);
  };
  

  return (
    <>
      <Header price={price} handlePrice={handlePrice} />
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
