import React from "react";
import group1 from "../../assets/group1.json";

const Card = () => {
  return (
    <ul>
      {group1.members.map((el) => (
        <li>{el}</li>
      ))}
    </ul>
  );
};

export default Card;
