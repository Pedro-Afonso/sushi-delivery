import type { AppProps } from "next/app";

import { StepProvider } from "../context/StepContext";
import { AppAuthProvider } from "../context";
import "../styles/globals.scss";
import "../config/firebase";

import { getAuth } from "firebase/auth";

function MyApp({ Component, pageProps }: AppProps) {
  const auth = getAuth();

  return (
    <AppAuthProvider auth={auth}>
      <StepProvider>
        <Component {...pageProps} />
      </StepProvider>
    </AppAuthProvider>
  );
}

export default MyApp;
