import React, { useState } from "react";

enum ActiveTab {
  Tweets = "TWEETS",
  Replies = "TWEETS & REPLIES",
  Media = "MEDIA",
  Likes = "LIKES",
}

const TabButton: React.FC<{
  isActive: boolean;
  text: string;
  onClick: () => void;
}> = ({ isActive, text, onClick }) => {
  return (
    <button
      className={
        (isActive ? `text-tblue` : `text-gray-500`) + " flex items-center "
      }
      onClick={onClick}
    >
      <div
        className={
          isActive
            ? `border-r-tblue border-r-4 rounded-r-full mr-4 h-8`
            : `border-r-transparent border-r-4 rounded-r-full mr-4 h-8`
        }
      />
      <p className="hover:text-tblue">{text}</p>
    </button>
  );
};

const FilterTweetBox = () => {
  const [tab, setTab] = useState<ActiveTab>(ActiveTab.Tweets);

  return (
    <section className="col-span-2 md:col-span-1 mb-7">
      <ul className="bg-white rounded-lg py-5 font-semibold text-sm font-pop space-y-4 drop-shadow">
        <li>
          <TabButton
            isActive={tab === ActiveTab.Tweets}
            text="Tweets"
            onClick={() => setTab(ActiveTab.Tweets)}
          />
        </li>
        <li>
          <TabButton
            isActive={tab === ActiveTab.Replies}
            text="Tweets & replies"
            onClick={() => setTab(ActiveTab.Replies)}
          />
        </li>
        <li>
          <TabButton
            isActive={tab === ActiveTab.Media}
            text="Media"
            onClick={() => setTab(ActiveTab.Media)}
          />
        </li>
        <li>
          <TabButton
            isActive={tab === ActiveTab.Likes}
            text="Likes"
            onClick={() => setTab(ActiveTab.Likes)}
          />
        </li>
      </ul>
    </section>
  );
};

export default FilterTweetBox;
