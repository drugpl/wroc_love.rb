import React from "react"
import NextHead from "next/head"
import { string, shape } from "prop-types"
import { withConfiguration } from "../contexts/configuration"
import ogImage from "./og_image.png"

const Head = (props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ""}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" />
    <link rel="icon" href="/static/favicon.png" />
    <link rel="me" href="https://ruby.social/@wrocloverb" />
    <meta property="og:url" content={props.url} />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta name="twitter:site" content={props.url} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={ogImage.src} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={ogImage.src} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-24474861-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();
      `,
      }}
    />
  </NextHead>
)

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: shape({
    src: string,
  }),
}

export default withConfiguration((config) => ({
  title: config.title,
  description: config.description,
  url: config.url,
}))(Head)
