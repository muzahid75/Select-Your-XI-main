import { useEffect, useState } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";
import PropTypes from "prop-types";

const Available = ({handleSelectedPlayer}) => {
    const [players,setPlayers]=useState([])
    
      useEffect(()=>{
        fetch('Players.json')
        .then(res => res.json())
        .then(data => setPlayers(data.players))
      },[])
    return (
        <div className="w-[1320px] mx-auto mb-4">
            <h2 className="font-bold text-2xl">Available Players</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-4">
                {
                    players.map(player =><PlayerCard handleSelectedPlayer={handleSelectedPlayer} key={player.playerId} player={player}/>)
                }
            </div>
        </div>
    );
};
Available.propTypes = {
  handleSelectedPlayer: PropTypes.func.isRequired,
};

export default Available;