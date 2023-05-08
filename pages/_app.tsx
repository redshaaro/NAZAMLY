import Navbar from "@/Components/NavBar";
import "@/styles/globals.css";
import AppContextProvider from '../context/appContext';



export default function App({ Component, pageProps }) {
  
  return (
     <>
     <AppContextProvider>
       <Navbar></Navbar>
        <Component {...pageProps} />
        </AppContextProvider>
     </>
    
       
      
    
  );
}
