import React, { useState, useEffect } from "react";
import { BiImageAlt, BiWorld } from "react-icons/bi";
import Button from "./Button";
import { CgSpinner } from "react-icons/cg";

import { trpc } from "@/utils/trpc";
import Image from "next/image";

interface TweetInputBoxProps {
  image: string;
}

const TweetInputBox: React.FC<TweetInputBoxProps> = (props) => {
  const [tweet, setTweet] = useState("");
  const tweetMut = trpc.tweet.postTweet.useMutation();
  const utils = trpc.useContext();

  const handleSubmitTweet = () => {
    tweetMut.mutate(
      { content: tweet },
      {
        onSuccess: (input) => {
          utils.tweet.getAllTweets.invalidate();
        },
      }
    );
  };

  useEffect(() => {
    if (tweetMut.isSuccess) {
      setTweet("");
    }
  }, [tweetMut.isSuccess]);

  return (
    <div className="bg-white rounded-lg py-3 px-5 drop-shadow mb-6">
      <h3 className="font-pop font-semibold text-xs mb-2">Tweet something</h3>
      <hr className="border-gray-300 mb-2" />
      <div className="flex justify-between mb-2">
        <div className="bg-slate-300 w-10 h-10 rounded-full mr-3">
          <Image
            className="rounded-full"
            width={40}
            height={40}
            src={props.image}
            alt="user-profile"
          />
        </div>
        <div className="flex-grow">
          <textarea
            placeholder="What's happening?"
            className="flex-grow outline-none w-full mb-2"
            value={tweet}
            onChange={(e) => setTweet(e.target.value)}
          />

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <button className="text-tblue mr-3">
                <BiImageAlt size={20} />
              </button>
              <button className="text-tblue flex items-center justify-between">
                <BiWorld size={20} className="mr-2" />
                <span className="hidden md:block text-xs">
                  Everyone can reply
                </span>
              </button>
            </div>

            <Button onClick={handleSubmitTweet} disabled={tweetMut.isLoading}>
              {tweetMut.isLoading ? (
                <CgSpinner className="animate-spin" size={25} />
              ) : (
                <span className="text-xs">Tweet</span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetInputBox;
