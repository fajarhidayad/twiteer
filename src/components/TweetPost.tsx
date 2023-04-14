import React from "react";
import Link from "next/link";
import { BiComment, BiRefresh } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";

const TweetPost = () => {
  return (
    <div className="bg-white rounded-lg p-5 mb-6 drop-shadow">
      <div className="flex items-end mb-5">
        <div className="bg-slate-300 w-10 h-10 rounded-full mr-4" />
        <div>
          <Link href="/" className="font-pop font-medium hover:underline">
            Username
          </Link>
          <p className="text-xs text-gray-400 font-medium">
            24 August at 20:43
          </p>
        </div>
      </div>

      <p className="text-[#4F4F4F] mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, id!
      </p>

      <div className="flex items-center mb-2">
        <p className="ml-auto text-xs font-medium text-gray-400 hover:underline">
          10 Comments
        </p>
        <p className="ml-4 text-xs font-medium text-gray-400 hover:underline">
          15 Retweets
        </p>
        <p className="ml-4 text-xs font-medium text-gray-400 hover:underline">
          5 Saved
        </p>
      </div>

      <div className="grid grid-cols-4 gap-8 border-y border-y-gray-300 py-1 px-2 md:px-5">
        <button className="flex items-center justify-center py-3 text-sm font-medium text-[#4F4F4F] rounded-lg hover:bg-gray-200 transition-all duration-200">
          <BiComment size={20} className="mr-3" />
          <span className="hidden md:block">Comment</span>
        </button>
        <button className="flex items-center justify-center py-3 text-sm font-medium text-[#4F4F4F] rounded-lg hover:bg-gray-200 transition-all duration-200">
          <BiRefresh size={25} className="mr-3" />
          <span className="hidden md:block">Retweet</span>
        </button>
        <button className="flex items-center justify-center py-3 text-sm font-medium text-[#4F4F4F] rounded-lg hover:bg-gray-200 transition-all duration-200">
          <AiOutlineHeart size={20} className="mr-3" />
          <span className="hidden md:block">Love</span>
        </button>
        <button className="flex items-center justify-center py-3 text-sm font-medium text-[#4F4F4F] rounded-lg hover:bg-gray-200 transition-all duration-200">
          <FiBookmark size={20} className="mr-3" />
          <span className="hidden md:block">Share</span>
        </button>
      </div>

      <div className="mt-2 flex justify-between items-center">
        <div className="w-10 h-10 rounded-full bg-slate-400 mr-4" />
        <div className="flex justify-between items-center flex-grow py-2 px-3 rounded-lg border border-gray-200">
          <input
            className="font-medium flex-grow outline-none"
            placeholder="Tweet your reply"
          />
        </div>
      </div>
    </div>
  );
};

export default TweetPost;
