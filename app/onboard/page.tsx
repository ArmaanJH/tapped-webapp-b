"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserModel } from "../../models/userModel";
import { useAuth } from "../../context/AuthContext";
import { doc, setDoc, Timestamp, getFirestore } from "firebase/firestore";

let db = getFirestore();

const Onboard = () => {
  const { user } = useAuth();
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    handle: "",
    location: "",
    bio: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await setDoc(doc(db, "users", user.uid), {
      id: user.uid,
      username: data.handle,
      artistName: data.name,
      bio: data.bio,
      deleted: false,
      account_type: "basic",
      badgesCount: 0,
      email: user.email,
      emailNotificationsAppReleases: true,
      emailNotificationsITLUpdates: true,
      epkUrl: "",
      followerCount: 0,
      followingCount: 0,
      genres: [""],
      insagramHandle: "",
      label: "",
      lat: 0,
      lng: 0,
      loopsCount: 0,
      occupations: [""],
      placeId: data.location,
      profilePicture: "/assets/images/profile.jpg",
      pushNotificationsLikes: true,
      pushNotificationsComments: true,
      pushNotificationsFollows: true,
      pushNotificationsDirectMessages: true,
      pushNotificationsITLUpdates: true,
      shadowBanned: false,
      soundcloud: "",
      spotifyId: "",
      stripeConnectedAccountId: "",
      stripeCustomerId: "",
      tiktokHandle: "",
      youtubeChannelId: "",
    });

    // let currentUser: UserModel = {
    //   id: user.uid,
    //   email: user.email,

    //   username: data.handle,

    //   artistName: data.name,
    //   bio: data.bio,
    //   genres: [""],
    //   occupations: [""],
    //   label: "",

    //   profilePicture: "/assets/images/profile.jpg",

    //   placeId: data.location, //google maps api location later on
    //   geohash: "", //hash of latitude and logitude
    //   lat: 0,
    //   lng: 0,

    //   loopsCount: 0,
    //   badgesCount: 0,
    //   followerCount: 0,
    //   followingCount: 0,

    //   deleted: false,
    //   shadowBanned: false,
    //   accountType: "basic",

    //   epkUrl: "",

    //   youtubeChannelId: "",
    //   tiktokHandle: "",
    //   instagramHandle: "",
    //   twitterHandle: "",
    //   spotifyId: "",

    //   pushNotificationsLikes: true,
    //   pushNotificationsComments: true,
    //   pushNotificationsFollows: true,
    //   pushNotificationsDirectMessages: true,
    //   pushNotificationsITLUpdates: true,

    //   emailNotificationsAppReleases: true,
    //   emailNotificationsITLUpdates: true,

    //   stripeConnectedAccountId: "",
    //   stripeCustomerId: "",
    // };

    router.push("/profile");
  };

  return (
    <div className="grid grid-cols-2 gap-2 rounded-lg shadow-lg bg-[#363636] ">
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src="/assets/images/charles_live.png"
          alt="Tapped_Concert_Live"
          width={330}
          height={90}
          className="w-full h-full rounded-l-lg"
        />
      </div>
      <div className="p-16">
        <div className="flex items-center justify-center pb-5">
          <Image
            src="/assets/images/tappedLogoReverse.png"
            alt="Tapped_Logo"
            width={330}
            height={90}
          />
        </div>

        <form className="w-full max-w-sm" onSubmit={handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold text-xs md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-artist-name"
              >
                Artist Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                id="inline-artist-name"
                type="text"
                placeholder=""
                onChange={(e: any) =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
                value={data.name || ""}
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold text-xs md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-handle"
              >
                Handle
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                id="inline-handle"
                type="text"
                placeholder=""
                onChange={(e: any) =>
                  setData({
                    ...data,
                    handle: e.target.value,
                  })
                }
                value={data.handle || ""}
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold text-xs md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-location"
              >
                Location
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                id="inline-location"
                type="text"
                placeholder=""
                onChange={(e: any) =>
                  setData({
                    ...data,
                    location: e.target.value,
                  })
                }
                value={data.location || ""}
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold text-xs md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-bio"
              >
                Bio
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                id="inline-bio"
                type="text"
                placeholder=""
                onChange={(e: any) =>
                  setData({
                    ...data,
                    bio: e.target.value,
                  })
                }
                value={data.bio || ""}
              ></input>
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-full">
              <button className="tapped_btn w-full" type="submit">
                Complete Onboarding
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Onboard;
