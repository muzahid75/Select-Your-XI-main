import PropTypes from "prop-types";
import Available from "../Available/Available";
import Selected from "../Selected/Selected";

const AllPlayers = ({
  handleClicked,
  isActive,
  handleSelectedPlayer,
  selectedPlayers,
  handleRemove,
}) => {
  return (
    <>
      <div className="w-[1320px] mx-auto flex flex-row justify-end">
        <button
          onClick={() => handleClicked(true)}
          className={`btn ${isActive ? "bg-amber-300" : ""}`}
        >
          Available
        </button>
        <button
          onClick={() => handleClicked(false)}
          className={`btn ${isActive ? "" : "bg-amber-300"}`}
        >
          Selected({selectedPlayers.length})
        </button>
      </div>
      {isActive ? (
        <Available handleSelectedPlayer={handleSelectedPlayer} />
      ) : (
        <Selected
          selectedPlayers={selectedPlayers}
          handleRemove={handleRemove}
          handleClicked={handleClicked}
        />
      )}
    </>
  );
};
AllPlayers.propTypes = {
  handleClicked: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleSelectedPlayer: PropTypes.func.isRequired,
  selectedPlayers: PropTypes.array.isRequired,
  handleRemove: PropTypes.func.isRequired,
};

export default AllPlayers;
