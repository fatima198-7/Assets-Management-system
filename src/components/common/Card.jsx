import React from "react";

function Card({ title }) {
  return (
    <div>
      <h2 className="text-xl font-bold pb-2">{title}</h2>
    </div>
  );
}

export default Card;
