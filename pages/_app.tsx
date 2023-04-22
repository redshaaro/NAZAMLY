import Navbar from "@/Components/Navbar/Navbar";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  
  return (
     <>
     <Navbar></Navbar>
        <Component {...pageProps} />
     </>
    
       
      
    
  );
}
