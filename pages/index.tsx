import Head from "next/head";
import { DSProvider } from "@nypl/design-system-react-components";
import SampleComponent from "../src/SampleComponent";

const Home = () => {
  return (
    <div>
      {/* Add any <head> related elements here. */}
      <Head>
        <title>NYPL</title>
        <meta name="description" content="NYPL" />
        <link rel="icon" type="image/png" href="//d2znry4lg8s0tq.cloudfront.net/images/favicon.ico" />
      </Head>

      <DSProvider>
        {/* Your component(s) here */}
        <SampleComponent />
      </DSProvider>
    </div>
  );
};

export default Home;
