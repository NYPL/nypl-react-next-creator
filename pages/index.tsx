import Head from "next/head";
import Footer from "@nypl/dgx-react-footer";
import SampleComponent from "../src/SampleComponent";
import {
  Card,
  CardContent,
  CardHeading,
  ImageRatios,
  ImageSizes,
  CardLayouts,
} from "@nypl/design-system-react-components";
import { default as NextImage } from "next/image";

const Home = () => {
  return (
    <div>
      {/* Add any <head> related elements here. */}
      <Head>
        <title>NYPL</title>
        <meta name="description" content="NYPL" />
        <link rel="icon" type="image/png" href="//d2znry4lg8s0tq.cloudfront.net/images/favicon.ico" />
      </Head>

      {/* This will render the NYPL Header. Make sure there is an element
      with a class name of "mainContent" for the skip navigation. */}
      <div id="Header-Placeholder" style={{ "minHeight": "230px" }}>
          <script type="text/javascript" src="https://header.nypl.org/dgx-header.min.js?skipNav=mainContent" async></script>
      </div>
      
      <div style={{maxWidth: "400px"}}>
        <Card
          id="test"
          imageComponent={
            <NextImage
              alt="alt"
              src="https://placeimg.com/900/450/animals"
              layout="responsive"
              width={900}
              height={450}
              quality={90}
            />
          }
          imageAspectRatio={ImageRatios.TwoByOne}
        >
          <CardHeading level={3}>
            Card Heading
          </CardHeading>
          <CardContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </CardContent>
        </Card>
      </div>
      
      {/* This will render the NYPL Footer. */}
      <Footer />
    </div>
  );
};

export default Home;
