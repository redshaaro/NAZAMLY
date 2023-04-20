import "@/styles/globals.css";
import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/nextjs";

export default function App({ Component, pageProps }) {
  const clerkpub=process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
  console.log(clerkpub)
  return (
    <ClerkProvider>
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <SignIn></SignIn>
      </SignedOut>
    </ClerkProvider>
  );
}
