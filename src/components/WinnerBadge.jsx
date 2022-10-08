import React from "react";

const WinnerBadge = ({ text }) => {
  return (
    <div className="w-[10rem] py-2 px-4 bg-emerald-600 rounded-lg">
      <p className="text-lg text-white">{text}</p>
    </div>
  );
};

export default WinnerBadge;
