import { FaUserAlt } from "react-icons/fa";
import { CiFlag1 } from "react-icons/ci";
import PropTypes from "prop-types";

const PlayerCard = ({ player,handleSelectedPlayer }) => {
//   console.log(player);
  const { image, name, country, role,battingType,bowlingType,biddingPrice } = player;
  return (
    <div className="border border-gray-300 rounded-xl p-4 space-y-2">
      <img
        className="h-[250px] w-full object-cover rounded-2xl"
        src={image}
        alt=""
      />
      <div className="flex gap-3 items-center">
        <FaUserAlt />
        <h2 className="font-bold">{name}</h2>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <CiFlag1 />
          <h2>{country}</h2>
        </div>
        <p>{role}</p>
      </div>
      <div className="divider"></div>
      <h2 className="font-bold">Rating</h2>
      <div className="flex justify-between items-center">
        <p className="font-bold">{battingType}</p>
        <p>{bowlingType}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-bold">Price : ${biddingPrice}</p>
        <button onClick={()=>handleSelectedPlayer(player)} className="btn">Choose Player</button>
      </div>
    </div>
  );
};
PlayerCard.propTypes = {
  player: PropTypes.object.isRequired,
  handleSelectedPlayer: PropTypes.func.isRequired,
};

export default PlayerCard;
