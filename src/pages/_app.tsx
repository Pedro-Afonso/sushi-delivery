import type { AppProps } from "next/app";

import { StepProvider } from "../context/StepContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StepProvider>
      <Component {...pageProps} />
    </StepProvider>
  );
}

export default MyApp;
