import "@/styles/globals.css";
import type { AppType } from "next/app";
import type { Session } from "next-auth";
import { SessionProvider, getSession } from "next-auth/react";
import { trpc } from "@/utils/trpc";
import Navbar from "@/components/Navbar";
import CheckSession from "@/components/CheckSession";
import { Provider } from "react-redux";
import { store } from "@/store";

const App: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <CheckSession>
          <Navbar />
          <div className="bg-slate-200">
            <Component {...pageProps} />
          </div>
        </CheckSession>
      </Provider>
    </SessionProvider>
  );
};

App.getInitialProps = async ({ ctx }) => {
  return {
    session: await getSession(ctx),
  };
};

export default trpc.withTRPC(App);
