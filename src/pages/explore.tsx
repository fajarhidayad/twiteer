import Button from "@/components/Button";
import TweetPost from "@/components/TweetPost";
import { trpc } from "@/utils/trpc";
import Head from "next/head";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CgSpinner } from "react-icons/cg";

const ExplorePage = () => {
  const tweets = trpc.tweet.getAllTweets.useQuery();

  return (
    <main className="container pt-24 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 min-h-screen grid-max-content">
      <Head>
        <title>Explore | Twiteer</title>
      </Head>

      <section className="col-span-1 md:col-span-1 mb-7">
        <ul className="bg-white rounded-lg py-5 font-semibold text-sm font-pop space-y-4 drop-shadow">
          <li>
            <button className="flex text-tblue items-center">
              <div className="border-r-tblue border-r-4 rounded-r-full mr-4 h-8" />
              <p>Top</p>
            </button>
          </li>
          <li>
            <button className="flex text-gray-500 items-center hover:text-tblue">
              <div className="border-r-transparent border-r-4 rounded-r-full mr-4 h-8" />
              <p>Latest</p>
            </button>
          </li>
          <li>
            <button className="flex text-gray-500 items-center hover:text-tblue">
              <div className="border-r-transparent border-r-4 rounded-r-full mr-4 h-8" />
              <p>People</p>
            </button>
          </li>
          <li>
            <button className="flex text-gray-500 items-center hover:text-tblue">
              <div className="border-r-transparent border-r-4 rounded-r-full mr-4 h-8" />
              <p>Media</p>
            </button>
          </li>
        </ul>
      </section>

      <section className="col-span-1 md:col-span-2">
        <div className="flex justify-between items-center p-3 rounded-lg bg-white drop-shadow mb-4">
          <AiOutlineSearch className="mr-1 md:mr-5 text-gray-400" size={20} />
          <input
            placeholder="Search"
            className="flex-grow flex-shrink outline-none"
          />
          <Button classname="text-xs px-2 md:px-5">Search</Button>
        </div>

        {tweets.isLoading || tweets.data === undefined ? (
          <section className="flex justify-center items-center">
            <CgSpinner className="text-tblue animate-spin" size={40} />
          </section>
        ) : (
          <>
            {tweets.data.length > 0 &&
              tweets.data.map((tweet) => (
                <TweetPost key={tweet.id} tweet={tweet} />
              ))}
          </>
        )}
      </section>
    </main>
  );
};

export default ExplorePage;
