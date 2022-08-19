module.exports = {
  title: "VitePress",

  // Theme related configurations.
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { title: "/Home", link: "/" },
      { title: "/About", link: "/about" },
      { title: "/Contact", link: "/contact" },
    ],
    sidebar: [{ title: "/Our Story", link: "/about/our-story" }],
  },
};
