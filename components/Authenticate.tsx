import React, { useEffect, useState } from "react";
import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Link from "next/link";
import Image from "next/image";

const Authenticate = () => {
  const [authUser, setAuthUser] = useState("");
  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
    return () => {
      listenAuth();
    };
  }, []);

  const userSignOut = () => {
    auth.signOut().catch((error) => console.log("error"));
  };

  return (
    <div className="sm:flex hidden">
      {authUser === null ? (
        <div className="flex gap-3 md:gap-5">
          <Link href="/login">
            <button className="tapped_btn">Login</button>
          </Link>
        </div>
      ) : (
        <div className="flex gap-3 md:gap-5">
          <button onClick={userSignOut} type="button" className="tapped_btn">
            Sign Out
          </button>

          <Link href="/profile">
            <Image
              src="/assets/images/profile.jpg"
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Authenticate;
