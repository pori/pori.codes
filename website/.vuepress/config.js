module.exports = {
  title: "Alice Hernandez | Software Engineer",
  description: "I write software for the web.",
  head: [
    [
      "meta",
      { property: "og:image", content: "https://pori.design/banner.png" },
    ],
    ["link", { type: "image/x-icon", rel: "icon", href: "/favicon.ico" }],
    [
      "link",
      {
        type: "text/css",
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Libre+Baskerville|Libre+Franklin",
      },
    ],
  ],
  markdown: {
    anchor: {
      permalink: false,
    },
  },
};
