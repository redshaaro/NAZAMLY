import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  const clerkpub=process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  console.log(clerkpub)
  return (
     
    
        <Component {...pageProps} />
       
      
    
  );
}
