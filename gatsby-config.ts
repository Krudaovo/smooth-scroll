import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    lang: `ja`,
    title: `Smooth Scroll`,
    description: `スムーズにスクロールし画像にカーソルがホバーするとその画像の説明文がフワっと浮き上がってくるアニメーションのデモサイト`,
    siteUrl: `https://main--bucolic-zabaione-6db8d0.netlify.app/`,
    themeColor: `#0F172A`,
    charset: `utf-8`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    "gatsby-plugin-postcss",
  ]
};

export default config;
