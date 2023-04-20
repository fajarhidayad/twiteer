import FollowRecBox from "@/components/FollowRecBox";
import TrendBox from "@/components/TrendBox";
import TweetInputBox from "@/components/TweetInputBox";
import TweetPost from "@/components/TweetPost";
import { trpc } from "@/utils/trpc";
import Head from "next/head";
import { CgSpinner } from "react-icons/cg";

export default function Home() {
  const tweets = trpc.tweet.getAllTweets.useQuery();

  return (
    <main className="container pt-24 grid grid-cols-2 md:grid-cols-3 lg gap-6 min-h-screen">
      <Head>
        <title>Twiteer</title>
      </Head>
      {tweets.isLoading || tweets.data === undefined ? (
        <section className="col-span-3 h-full w-full flex justify-center items-center">
          <CgSpinner className="text-tblue animate-spin" size={40} />
        </section>
      ) : (
        <>
          <section className="col-span-2">
            <TweetInputBox />
            {tweets.data.length > 0 &&
              tweets.data.map((tweet) => <TweetPost key={tweet.id} />)}
          </section>

          <section className="hidden md:block">
            <TrendBox />
            <FollowRecBox />
          </section>
        </>
      )}
    </main>
  );
}
