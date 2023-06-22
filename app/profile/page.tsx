"use client";

import React from "react";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  console.log(user);

  return <div>Profile</div>;
};

export default Profile;
