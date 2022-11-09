import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import {layout} from "../components/layout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (<layou><SessionProvider session={session}>
        <Component {...pageProps} />

      </SessionProvider></layou>

  );
}
