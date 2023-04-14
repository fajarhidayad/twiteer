import React from "react";
import { BiImageAlt, BiWorld } from "react-icons/bi";
import Button from "./Button";

const TweetInputBox = () => {
  return (
    <div className="bg-white rounded-lg py-3 px-5 drop-shadow mb-6">
      <h3 className="font-pop font-semibold text-xs mb-2">Tweet something</h3>
      <hr className="border-gray-300 mb-2" />
      <div className="flex justify-between mb-2">
        <div className="bg-slate-300 w-10 h-10 rounded-full mr-3" />
        <div className="flex-grow">
          <textarea
            placeholder="What's happening"
            className="flex-grow outline-none w-full mb-2"
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

            <Button>
              <span className="text-xs">Tweet</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetInputBox;
