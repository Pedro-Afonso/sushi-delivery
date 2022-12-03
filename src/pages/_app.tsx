import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { StepProvider } from "../context/StepContext";
import { AppAuthProvider } from "../context";
import "../styles/globals.scss";
import "../config/firebase";

import { getAuth } from "firebase/auth";
import { store } from "../config/store";

function MyApp({ Component, pageProps }: AppProps) {
  const auth = getAuth();

  return (
    <Provider store={store}>
      <AppAuthProvider auth={auth}>
        <StepProvider>
          <Component {...pageProps} />
        </StepProvider>
      </AppAuthProvider>
    </Provider>
  );
}

export default MyApp;
