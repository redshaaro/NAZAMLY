import "@/styles/globals.css";
import AppContextProvider from "../context/appContext";
import NavBar from "@/Components/NavBar";
 

export default function App({ Component, pageProps }) {
  
  return (
    <>
      <AppContextProvider>
       
        
          <Component {...pageProps} />
       
      </AppContextProvider>
    </>
  );
}
