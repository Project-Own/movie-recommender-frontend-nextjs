import "../styles/globals.css";
import "./App.css";
import Head from "next/head";
import CustomThemeProvider from "../components/CustomThemeProvider";
import { CssBaseline } from "@material-ui/core";
import store from "../features/store";
import { Provider } from "react-redux";
import { snackbar } from "../features/Snackbar/snackbarSlice";
import CustomizedSnackbars from "../features/Snackbar/Snackbar";
import { useEffect } from "react";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>Recommender</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <CustomThemeProvider>
        <Provider store={store}>
          <CssBaseline />
          <CustomizedSnackbars />
          <Component {...pageProps} />
        </Provider>
      </CustomThemeProvider>
    </>
  );
};

export default MyApp;
