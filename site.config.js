const CONFIG = {
  // profile setting (required)
  profile: {
    name: "CHOI YU HYUN",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "data analyst",
    bio: "코드가 보이지 않는 오류 발생 -> 새로고침 필요",
    email: "cyh5123@daum.net",
    linkedin: "yuhyun2",
    github: "yu-hyun2",
    instagram: "u_u_hyun",
  },
  projects: [
    {
      name: "Dementia_Analysis",
      href: "https://github.com/yu-hyun2/Dementia_Analysis-1",
    },
  ],
  // blog setting (required)
  blog: {
    title: "죄유연, 아즈카반의 하루",
    description: "welcome to my channel",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "https://yhlog.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: "yu-hyun2/YH-BLOG",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
