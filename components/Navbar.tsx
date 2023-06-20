"use client";

import Link from "next/link";
import Image from "next/image";
import Authenticate from "./Authenticate";

const Navbar = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.png"
          alt="Tapped_Logo"
          width={110}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Tapped</p>
      </Link>
      <Authenticate />
    </nav>
  );
};

export default Navbar;
