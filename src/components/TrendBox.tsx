import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const TrendBox = () => {
  const router = useRouter();
  return (
    <div className="bg-white rounded-xl py-3 drop-shadow mb-5">
      <h3 className="font-pop text-xs font-semibold mb-2 mx-5">
        Trends for you
      </h3>
      <hr className="border-gray-300 mb-4" />
      <ul>
        <li
          onClick={() => router.push("/")}
          className="py-2 mb-2 px-5 hover:bg-gray-100 cursor-pointer"
        >
          <h3 className="mb-2 font-semibold">#programming</h3>
          <span className="text-xs font-medium text-[#828282]">
            213k Tweets
          </span>
        </li>
        <li
          onClick={() => router.push("/")}
          className="py-2 mb-2 px-5 hover:bg-gray-100 cursor-pointer"
        >
          <h3 className="mb-2 font-semibold">#programming</h3>
          <span className="text-xs font-medium text-[#828282]">
            213k Tweets
          </span>
        </li>
        <li
          onClick={() => router.push("/")}
          className="py-2 mb-2 px-5 hover:bg-gray-100 cursor-pointer"
        >
          <h3 className="mb-2 font-semibold">#programming</h3>
          <span className="text-xs font-medium text-[#828282]">
            213k Tweets
          </span>
        </li>
      </ul>
    </div>
  );
};

export default TrendBox;
