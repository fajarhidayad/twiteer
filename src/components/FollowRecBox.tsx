import React from "react";
import { MdPersonAdd } from "react-icons/md";

const FollowRecBox = () => {
  return (
    <div className="bg-white rounded-xl px-5 py-3 drop-shadow">
      <h3 className="font-pop text-xs font-semibold mb-2">Who to follow</h3>
      <hr className="border-gray-300 mb-5" />
      <ul>
        <li>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <div className="bg-slate-300 w-10 h-10 rounded-full mr-4" />
              <div>
                <h3 className="font-pop font-medium">Mikael Stanley</h3>
                <p className="text-xs font-medium text-gray-400">
                  120k followers
                </p>
              </div>
            </div>
            <button className="flex items-center text-white bg-tblue py-1 px-3 rounded">
              <MdPersonAdd className="mr-1" /> <span>Follow</span>
            </button>
          </div>
          <hr className="border-gray-300" />
        </li>
      </ul>
    </div>
  );
};

export default FollowRecBox;
