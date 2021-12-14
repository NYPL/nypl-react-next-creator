// We need this file to import related .scss and .css files.
import "../styles/main.scss";
import "@nypl/design-system-react-components/dist/styles.css";
import { DSProvider } from "@nypl/design-system-react-components";

function MyApp({ Component, pageProps }) {
  return (
    <DSProvider><Component {...pageProps} /></DSProvider>
  )
}

export default MyApp;
