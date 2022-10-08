import React from "react";
import { VscCircleLargeOutline } from "react-icons/vsc";
import { VscClose } from "react-icons/vsc";

const PlayersTurn = ({ player }) => {
  return (
    <div className="w-fit px-4 py-2 flex justify-center items-center text-center bg-orange-500 rounded-lg">
      <p className="text-lg text-white">
        Player
        <span className="inline px-2 ">
          {player === 1 ? (
            <VscCircleLargeOutline className="inline text-2xl" />
          ) : (
            <VscClose className="inline text-2xl" />
          )}
          's
        </span>
        turn
      </p>
    </div>
  );
};

export default PlayersTurn;
