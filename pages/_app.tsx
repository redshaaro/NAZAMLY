import "@/styles/globals.css";
import AppContextProvider from "../context/appContext";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <AppContextProvider>
        
          <Component {...pageProps} />
       
      </AppContextProvider>
    </>
  );
}
