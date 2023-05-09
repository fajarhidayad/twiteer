import FollowRecBox from "@/components/FollowRecBox";
import TrendBox from "@/components/TrendBox";
import TweetInputBox from "@/components/TweetInputBox";
import TweetPost from "@/components/TweetPost";
import { useAppSelector } from "@/store/hooks";
import { trpc } from "@/utils/trpc";
import Head from "next/head";
import { CgSpinner } from "react-icons/cg";

export default function Home() {
  const tweets = trpc.tweet.getAllTweets.useQuery();
  const user = useAppSelector((state) => state.auth.user);

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
            {user && <TweetInputBox image={user.image!} />}
            {tweets.data.length > 0 &&
              tweets.data.map((tweet) => (
                <TweetPost key={tweet.id} tweet={tweet} />
              ))}
          </section>

          <section className="hidden relative md:block">
            <TrendBox />
            <FollowRecBox />
            <footer className="mt-3 px-5">
              <h3 className="text-xs text-gray-500 font-semibold">
                Design by{" "}
                <a
                  href="http://devchallenges.io"
                  className="text-blue-500 hover:underline"
                >
                  @devchallenges.io
                </a>{" "}
                made by{" "}
                <a
                  href="https://github.com/fajarhidayad"
                  className="text-blue-500 hover:underline"
                >
                  Fajar Surya Hidayad
                </a>
              </h3>
            </footer>
          </section>
        </>
      )}
    </main>
  );
}
