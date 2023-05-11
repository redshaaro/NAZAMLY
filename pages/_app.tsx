import "@/styles/globals.css";
import AppContextProvider from "../context/appContext";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  return (
    <>
      <AppContextProvider>
        <SWRConfig value={{ fetcher }}>
          <Component {...pageProps} />
        </SWRConfig>
      </AppContextProvider>
    </>
  );
}
