import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: process.env.SITE_URL || "https://blog.vlzx.dev/",
    title: "vlzx's blog",
    description: "Notes on technology, learning, and life.",
    author: "vlzx",
    profile: "https://github.com/vlzx",
    ogImage: "social-card.svg",
    lang: "en",
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: false,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: false,
    },
    search: "pagefind",
  },
  socials: [{ name: "github", url: "https://github.com/vlzx" }],
  shareLinks: [],
});
