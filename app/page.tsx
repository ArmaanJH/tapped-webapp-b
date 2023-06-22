"use client";

import { UserModel } from "../models/userModel";
import Feed from "../components/Feed";

let user: UserModel = {
  id: "sdlkj",
  email: "123@gmail.com",

  username: "Armaanio123",

  artistName: "Armaan",
  bio: "yuh",
  genres: ["hi", "hello", "yo"],
  occupations: ["hi", "hello", "yo"],
  label: "Safety First Records",

  profilePicture: "yes",

  loopsCount: 0,
  badgesCount: 0,
  followerCount: 0,
  followingCount: 0,

  deleted: false,
  shadowBanned: false,
  accountType: "basic",

  pushNotificationsLikes: true,
  pushNotificationsComments: true,
  pushNotificationsFollows: true,
  pushNotificationsDirectMessages: true,
  pushNotificationsITLUpdates: true,

  emailNotificationsAppReleases: true,
  emailNotificationsITLUpdates: true,
};

const Home = () => {
  return (
    <div>
      <p className="tapped_txt_blue">Landing Page</p>
    </div>
  );
};

export default Home;
