import PropTypes from "prop-types";
import { RiDeleteBinLine } from "react-icons/ri";

const Selected = ({ selectedPlayers,handleRemove,handleClicked }) => {
  return (
    <div className="w-[1320px] mx-auto mb-4">
      <h2 className="font-bold text-2xl mb-4">
        Selected Players({selectedPlayers.length}/6)
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-10 mb-4">
        {selectedPlayers.map((player) => (
          <div
            key={player.playerId}
            className="border flex justify-between items-center border-gray-300 rounded-xl p-4 space-y-2"
          >
            <div className="flex gap-10">
              <img
                className="h-[50px] w-[50px] object-cover rounded-full"
                src={player.image}
                alt={player.name}
              />
              <div>
                <h2 className="font-bold">{player.name}</h2>
                <p>{player.battingType}</p>
              </div>
            </div>
            <div>
              <button onClick={()=>handleRemove(player.playerId)} className="btn"><RiDeleteBinLine className="text-red-400"/></button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => handleClicked(true)} className="btn bg-amber-300">Add More Player</button>
    </div>
  );
};

Selected.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
  handleClicked: PropTypes.func.isRequired,
};

export default Selected;
