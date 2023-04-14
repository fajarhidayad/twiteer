import FollowRecBox from "@/components/FollowRecBox";
import TrendBox from "@/components/TrendBox";
import TweetInputBox from "@/components/TweetInputBox";
import TweetPost from "@/components/TweetPost";
import Head from "next/head";

export default function Home() {
  return (
    <main className="container pt-24 grid grid-cols-2 md:grid-cols-3 lg gap-6 h-[200vh]">
      <Head>
        <title>Twiteer</title>
      </Head>

      <section className="col-span-2">
        <TweetInputBox />
        <TweetPost />
      </section>

      <section className="hidden md:block">
        <TrendBox />
        <FollowRecBox />
      </section>
    </main>
  );
}
