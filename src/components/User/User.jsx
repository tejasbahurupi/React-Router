import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  return (
    <div className="py-16 bg-orange-500 flex justify-center align-center text-3xl">
      User: {userId}
    </div>
  );
};

export default User;
