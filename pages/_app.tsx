import Navbar from "@/Components/NavBar";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  
  return (
     <>
     <Navbar></Navbar>
        <Component {...pageProps} />
     </>
    
       
      
    
  );
}
