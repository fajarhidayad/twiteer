import FilterTweetBox from "@/components/FilterTweetBox";
import TweetPost from "@/components/TweetPost";
import Head from "next/head";
import React from "react";

const BookmarksPage = () => {
  return (
    <main className="container pt-24 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 min-h-screen grid-max-content">
      <Head>
        <title>Bookmarks | Twiteer</title>
      </Head>

      <FilterTweetBox />

      <section className="col-span-1 md:col-span-2"></section>
    </main>
  );
};

export default BookmarksPage;
