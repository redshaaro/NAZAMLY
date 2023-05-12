import "@/styles/globals.css";
import AppContextProvider from "../context/appContext";
 

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <AppContextProvider>
        
          <Component {...pageProps} />
       
      </AppContextProvider>
    </>
  );
}
