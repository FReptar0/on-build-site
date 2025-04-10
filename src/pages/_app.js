// pages/_app.js
import "@/styles/global.css";
import "@/styles/index.css";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import darkTheme from "../utils/theme";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="icon" href="/logos/logo.png" />
        <link href="/logos/logo.png" rel="shortcut icon" type="image/x-icon" />
        <title>Qardeal</title>
      </Head>

      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}


export default MyApp;
