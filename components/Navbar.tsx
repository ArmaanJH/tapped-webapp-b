"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const router = useRouter();

  return (
    <nav className="flex-between w-full mb-16 pt-3 shadow pl-6 pb-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/tappedLogoReverse.png"
          alt="Tapped_Logo"
          width={110}
          height={30}
        />
      </Link>
      {user ? (
        <div className="flex gap-3 md:gap-5 pr-6 pt-2">
          <button
            onClick={() => {
              logout();
              router.push("/login");
            }}
            type="button"
            className="tapped_btn"
          >
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
      ) : (
        <div className="flex gap-3 md:gap-5 pr-6">
          <Link href="/login">
            <button className="tapped_btn">Login</button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
