let ourStorySidebar = [{ title: "/Our Story", link: "/about/our-story" }];

module.exports = {
  lang: "en-US",
  // Title Page
  title: "VitePress",
  // Page Description
  description: "Vite & Vue powered static site generator.",

  // Theme related configurations.
  themeConfig: {
    // logo: "/logo.svg",
    nav: [
      { title: "/Home", link: "/" },
      { title: "/About", link: "/about" },
      { title: "/Contact", link: "/contact" },
    ],
    sidebar: {
      "/about": ourStorySidebar,
      "/contact": ourStorySidebar,
    },
  },
  // appearance: false,
  // export default {
  head: [
    [
      "link",
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
    ],
    // would render: <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  ],
  // }
};
