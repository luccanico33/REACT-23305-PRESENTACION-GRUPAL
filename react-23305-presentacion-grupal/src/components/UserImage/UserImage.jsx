import React, { useEffect, useState } from "react";

const URL = "https://api.github.com/users/";

const UserImage = ({ user }) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const res = await fetch(`${URL}${user}`);
        const data = await res.json();
        setImage(data.avatar_url);
      } catch (error) {
        console.log(error);
      }
    };
    fetchImg();
  }, []);

  return image === "" ? (
    <p>LOADING...</p>
  ) : (
    <img src={image} alt="user profile image from github site" />
  );
};

export default UserImage;
