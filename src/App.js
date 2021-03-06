import React from "react";
import { Root, Routes, Head } from "react-static";
import "modern-normalize/modern-normalize.css";

function App() {
  return (
    <Root>
      <Head>
        <meta
          property="og:title"
          content="Global warming information and data"
        />
        <meta
          property="og:description"
          content="Up-to-date global climate information"
        />
        <meta property="og:url" content="https://isearthstillwarming.com" />
        <meta charSet="UTF-8" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={require("./assets/apple-touch-icon.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={require("./assets/favicon-32x32.png")}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={require("./assets/favicon-16x16.png")}
        />
        <title>Global warming information and data</title>
      </Head>
      <div
        css={`
          @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700|Spectral:400,400i");
          line-height: 1.6;
          *:not(p) {
            font-family: "Open Sans", sans-serif;
          }
          p {
            font-family: "Spectral", serif;
            font-size: 18px;
            * {
              font-family: "Spectral", serif;
            }
          }
          h1 {
            padding: 1.75rem 0 1rem;
          }
          h2 {
            padding: 1.75rem 0 0;
            font-weight: 600;
          }
          h3 {
            padding: 0.75rem 0 0;
            font-weight: 600;
          }
        `}
      >
        <Routes />
      </div>
    </Root>
  );
}

export default App;
