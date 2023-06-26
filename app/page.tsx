"use client";

import Feed from "../components/Feed";
import Link from "next/link";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-full grid grid-cols-3 gap-3 flex justify-center items-center p-16">
      <Link href="/jayduhhh">
        <div className="rounded-lg shadow-lg bg-[#363636] flex inline">
          <Image
            src="/assets/images/jayduhhh-profile.jpg"
            width={100}
            height={100}
            className="rounded-full border-4 border-[#42A5F5] shadow mx-auto"
            alt="profile"
          />
          <p className="text-xl tapped_txt_blue pt-8 pr-8 pl-8">@jayduhhh</p>
        </div>
      </Link>
      <Link href="/seelife">
        <div className="rounded-lg shadow-lg bg-[#363636] flex inline">
          <Image
            src="/assets/images/seelife-profile1.jpg"
            width={100}
            height={100}
            className="rounded-full border-4 border-[#42A5F5] shadow mx-auto"
            alt="profile"
          />
          <p className="text-xl tapped_txt_blue pt-8 pr-8 pl-8">@seelife</p>
        </div>
      </Link>
      <Link href="/jack-harlow">
        <div className="rounded-lg shadow-lg bg-[#363636] flex inline">
          <Image
            src="/assets/images/jackharlow-profile.jpg"
            width={100}
            height={100}
            className="rounded-full border-4 border-[#42A5F5] shadow mx-auto"
            alt="profile"
          />
          <p className="text-xl tapped_txt_blue pt-8 pr-8 pl-8">@jackharlow</p>
        </div>
      </Link>
    </div>
  );
};

export default Home;
