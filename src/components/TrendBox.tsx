import Link from "next/link";
import React from "react";

const TrendBox = () => {
  return (
    <div className="bg-white rounded-xl px-5 py-3 drop-shadow mb-5">
      <h3 className="font-pop text-xs font-semibold mb-2">Trends for you</h3>
      <hr className="border-gray-300 mb-6" />
      <ul>
        <li className="mb-6">
          <Link href="/">
            <h3 className="mb-2 font-semibold">#programming</h3>
            <span className="text-xs font-medium text-[#828282]">
              213k Tweets
            </span>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/">
            <h3 className="mb-2 font-semibold">#programming</h3>
            <span className="text-xs font-medium text-[#828282]">
              213k Tweets
            </span>
          </Link>
        </li>
        <li className="mb-6">
          <Link href="/">
            <h3 className="mb-2 font-semibold">#programming</h3>
            <span className="text-xs font-medium text-[#828282]">
              213k Tweets
            </span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TrendBox;
