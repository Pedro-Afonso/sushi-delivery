import type { AppProps } from "next/app";
import { Provider } from "react-redux";

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
        <Component {...pageProps} />
      </AppAuthProvider>
    </Provider>
  );
}

export default MyApp;
