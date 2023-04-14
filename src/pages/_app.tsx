import "@/styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "@/utils/trpc";
import Navbar from "@/components/Navbar";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <div className="bg-slate-200">
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default trpc.withTRPC(App);
