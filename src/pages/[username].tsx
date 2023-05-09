import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Button from "@/components/Button";
import FilterTweetBox from "@/components/FilterTweetBox";
import { trpc } from "@/utils/trpc";
import { CgSpinner } from "react-icons/cg";
import { useAppSelector } from "@/store/hooks";
import Link from "next/link";
import TweetPost from "@/components/TweetPost";

const ProfilePage = () => {
  const userAuth = useAppSelector((state) => state.auth);
  const { query } = useRouter();
  const { data, isLoading } = trpc.user.getProfile.useQuery({
    username: query.username as string,
  });

  const { data: tweets, isLoading: isLoadingTweets } =
    trpc.tweet.getTweetByUsername.useQuery({
      username: query.username as string,
    });

  if (isLoading) {
    return (
      <main className="h-screen bg-slate-200 flex justify-center items-center">
        <CgSpinner size={35} className="text-tblue animate-spin" />
      </main>
    );
  }

  return (
    <main className="pt-24 min-h-screen">
      <Head>
        <title>Twiteer</title>
      </Head>

      <section className="container">
        <div className="bg-white py-6 px-7 rounded-xl">
          <div className="flex">
            <div className="w-32 h-24 bg-gray-300 rounded-full mr-6" />
            <div className="flex-grow">
              <div className="flex items-center font-pop">
                <h2 className="font-semibold text-2xl mr-6">{data?.name}</h2>
                <p className="text-xs text-gray-500 font-medium mr-6">
                  <span className="font-semibold text-slate-800">
                    {data?._count.followings}
                  </span>{" "}
                  Following
                </p>
                <p className="text-xs text-gray-500 font-medium mr-auto">
                  <span className="font-semibold text-slate-800">
                    {data?._count.followers}
                  </span>{" "}
                  Followers
                </p>
                {data?.username === userAuth?.user?.username ? (
                  <Link
                    href={"/settings"}
                    className="px-4 py-2 text-xs font-semibold bg-transparent border border-tblue text-tblue"
                  >
                    Edit Profile
                  </Link>
                ) : (
                  <Button classname="text-xs">Follow</Button>
                )}
              </div>
              <p className="w-1/2 text-gray-500 mt-5">{data?.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-6 grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 h-[150vh] grid-max-content">
        <FilterTweetBox />

        <section className="col-span-1 md:col-span-2">
          {isLoadingTweets && <CgSpinner className="animate-spin text-tblue" />}
          {tweets !== undefined &&
            tweets.map((tweet) => <TweetPost key={tweet.id} tweet={tweet} />)}
        </section>
      </section>
    </main>
  );
};

export default ProfilePage;
