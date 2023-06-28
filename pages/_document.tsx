import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <style>{`
          #Header-Placeholder {
            minheight: 70px;
          }
          @media screen and (min-width: 1024px) {
            #Header-Placeholder {
              min-height: 230px;
            }
          }
        `}</style>
        <body>
          <div id="Header-Placeholder">
            <div id="nypl-header"></div>
            <script
              type="module"
              src="https://ds-header.nypl.org/header.min.js?containerId=nypl-header"
              async
            ></script>
          </div>
          <Main />
          <div id="nypl-footer"></div>
          <script
            type="module"
            src="https://ds-header.nypl.org/footer.min.js?containerId=nypl-footer"
            async
          ></script>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
