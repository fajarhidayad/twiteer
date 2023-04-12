import "@/styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "@/utils/trpc";
import Navbar from "@/components/Navbar";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
};

export default trpc.withTRPC(App);
