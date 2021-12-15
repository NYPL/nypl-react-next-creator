import Head from "next/head";
import Footer from "@nypl/dgx-react-footer";
import SampleComponent from "../src/SampleComponent";
import {
  Card,
  CardContent,
  CardHeading,
  Heading,
  Image,
  ImageRatios,
  ImageSizes,
  CardLayouts,
  SimpleGrid,
  Text,
} from "@nypl/design-system-react-components";
import { default as NextImage } from "next/image";

const imageWithWrapper = (
  <div style={{ width: "100%", marginBottom: "var(--nypl-space-xs)" }}>
    <NextImage
      alt="alt"
      src="https://placeimg.com/900/450/animals"
      layout="responsive"
      width={900}
      height={450}
      quality={90}
    />
  </div>
);

const Home = () => {
  return (
    <div>
      {/* Add any <head> related elements here. */}
      <Head>
        <title>NYPL</title>
        <meta name="description" content="NYPL" />
        <link
          rel="icon"
          type="image/png"
          href="//d2znry4lg8s0tq.cloudfront.net/images/favicon.ico"
        />
      </Head>

      {/* This will render the NYPL Header. Make sure there is an element
      with a class name of "mainContent" for the skip navigation. */}
      <div id="Header-Placeholder" style={{ minHeight: "230px" }}>
        <script
          type="text/javascript"
          src="https://header.nypl.org/dgx-header.min.js?skipNav=mainContent"
          async
        ></script>
      </div>
      <div style={{ padding: "32px" }}>
        <SimpleGrid columns={1}>
          <div>
            <Heading>Explanation</Heading>
            <Text>
              Take a look at <strong>imageWithWrapper</strong> in the code on
              this page and make surethe <strong>imageAspectRatio</strong> prop
              for each <strong>Card</strong> is set to{" "}
              <strong>ImageRatios.Original</strong>.
            </Text>
          </div>
          <div>
            <Heading>Cards</Heading>
            <SimpleGrid>
              <Card
                id="test-next-one"
                imageComponent={imageWithWrapper}
                imageAspectRatio={ImageRatios.Original}
              >
                <CardHeading level={3}>Card One</CardHeading>
                <CardContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardContent>
              </Card>
              <Card
                id="test-next-two"
                imageComponent={imageWithWrapper}
                imageAspectRatio={ImageRatios.Original}
              >
                <CardHeading level={3}>Card Two</CardHeading>
                <CardContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardContent>
              </Card>
              <Card
                id="test-next-three"
                imageComponent={imageWithWrapper}
                imageAspectRatio={ImageRatios.Original}
              >
                <CardHeading level={3}>Card Three</CardHeading>
                <CardContent>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </CardContent>
              </Card>
            </SimpleGrid>
          </div>
        </SimpleGrid>
      </div>

      {/* This will render the NYPL Footer. */}
      <Footer />
    </div>
  );
};

export default Home;
