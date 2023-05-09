import React from "react";
import Link from "next/link";
import { BiComment, BiRefresh } from "react-icons/bi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FiBookmark } from "react-icons/fi";
import Image from "next/image";
import { formatDate } from "@/utils/date-format";
import { useAppSelector } from "@/store/hooks";

interface TweetPostProps {
  tweet: {
    id: number;
    content: string;
    createdAt: Date;
    author: {
      image: string | null;
      name: string | null;
    };
  };
}

const TweetPost: React.FC<TweetPostProps> = (props) => {
  const userAuth = useAppSelector((state) => state.auth.user);
  return (
    <div className="bg-white rounded-lg p-5 mb-6 drop-shadow">
      <div className="flex items-end mb-5">
        <div className="bg-slate-300 w-10 h-10 rounded-full mr-3">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src={props.tweet.author.image!}
            alt="user-profile"
          />
        </div>
        <div>
          <Link href="/" className="font-pop font-medium hover:underline">
            {props.tweet.author.name}
          </Link>
          <p className="text-xs text-gray-400 font-medium">
            {formatDate(props.tweet.createdAt.toString())}
          </p>
        </div>
      </div>

      <p className="text-[#4F4F4F] mb-4">{props.tweet.content}</p>

      <div className="flex items-center mb-2">
        <p className="ml-auto text-xs font-medium text-gray-400 hover:underline cursor-pointer">
          10 Comments
        </p>
        <p className="ml-4 text-xs font-medium text-gray-400 hover:underline cursor-pointer">
          15 Retweets
        </p>
        <p className="ml-4 text-xs font-medium text-gray-400">5 Saved</p>
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

      {userAuth && (
        <div className="mt-2 flex justify-between items-center">
          <div className="bg-slate-300 w-10 h-10 rounded-full mr-3">
            <Image
              className="rounded-full"
              width={40}
              height={40}
              src={userAuth.image!}
              alt="user-profile"
            />
          </div>
          <div className="flex justify-between items-center flex-grow py-2 px-3 rounded-lg border bg-gray-50 border-gray-200">
            <input
              className="font-medium flex-grow outline-none bg-transparent"
              placeholder="Tweet your reply"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default TweetPost;
