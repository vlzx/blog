# vlzx's blog

记录技术、学习与生活的个人博客，基于 [AstroPaper](https://github.com/satnaing/astro-paper) 构建，部署于 Cloudflare Pages。界面使用英文，文章支持中文和英文。

**[访问博客](https://blog.vlzx.dev)** · [RSS 订阅](https://blog.vlzx.dev/rss.xml) · [中文排版示例](https://blog.vlzx.dev/posts/chinese-typography/)

## 功能

- 响应式布局与明暗主题。
- Markdown / MDX 写作、精选文章、标签与归档。
- Pagefind 静态全文搜索。
- RSS、站点地图和 canonical 链接。
- 中文字体回退：苹方 → 思源黑体 → 微软雅黑。

## 技术栈

Astro 7、AstroPaper 6.1、TypeScript、Tailwind CSS 4、Pagefind 和 Cloudflare Wrangler。实际依赖版本以 `package-lock.json` 为准。

## 本地开发

使用 Node.js 24（见 `.node-version`）和 npm。在项目根目录运行：

```bash
npm ci
npm run dev
```

浏览器打开终端输出的本地地址，通常为 `http://localhost:4321`。

首次使用搜索前需要生成索引：

```bash
npm run build
npm run dev
```

搜索索引在构建时生成。修改文章后，需要重新构建才能更新搜索结果。

## 常用命令

| 命令                   | 用途                             |
| ---------------------- | -------------------------------- |
| `npm run dev`          | 启动开发服务器                   |
| `npm run build`        | 类型检查、静态构建并生成搜索索引 |
| `npm run preview`      | 本地预览已生成的 `dist/`         |
| `npm run lint`         | 运行 ESLint                      |
| `npm run format:check` | 检查代码和文档格式               |
| `npm run format`       | 使用 Prettier 格式化文件         |
| `npm run deploy`       | 构建并发布到 Pages 生产环境      |

构建脚本包含 `cp -r`，适合在 Linux、macOS 或 Windows 的 WSL 环境中运行。

## 项目结构

```text
.
├── astro-paper.config.ts    # 标题、作者、站点地址与主题功能
├── astro.config.ts          # Astro 集成、路由语言与 Markdown 配置
├── wrangler.jsonc           # Cloudflare Pages 配置
├── public/                  # favicon、分享卡片等静态资源
├── src/
│   ├── components/          # 公共组件
│   ├── content/
│   │   ├── pages/about.md   # 关于页
│   │   └── posts/           # Markdown / MDX 文章
│   ├── content.config.ts   # 内容字段定义
│   ├── i18n/lang/           # 界面翻译
│   ├── layouts/             # 页面布局
│   ├── pages/               # 页面与路由
│   └── styles/              # 字体、配色与正文排版
└── package.json             # 依赖与命令
```

`dist/`、`.astro/` 和 `public/pagefind/` 是生成产物，已被 Git 忽略。

## 写文章

在 `src/content/posts/` 新建文件，例如 `my-first-post.md`：

```markdown
---
title: 我的第一篇文章
pubDatetime: 2026-09-15T08:00:00Z
description: 这篇文章的简短摘要。
tags:
  - notes
draft: false
featured: false
---

正文从这里开始。

## 一个小标题

支持 **加粗**、列表、链接、图片和代码块。
```

这篇文章的地址为 `/posts/my-first-post/`。建议使用简短、稳定的英文文件名；标题和正文可以使用中文。

| 字段          | 说明                                  |
| ------------- | ------------------------------------- |
| `title`       | 必填，文章标题                        |
| `pubDatetime` | 必填，发布时间，使用带时区的 ISO 日期 |
| `description` | 必填，文章摘要                        |
| `author`      | 可选，默认 `vlzx`                     |
| `tags`        | 可选，标签列表                        |
| `draft`       | 设为 `true` 时不发布                  |
| `featured`    | 设为 `true` 时在首页精选区展示        |
| `modDatetime` | 可选，最近修改时间                    |
| `ogImage`     | 可选，文章分享图片                    |

日期按 `Asia/Shanghai` 时区显示。站点是静态构建，未来日期的文章不会仅因时间到达而自动上线，需要重新构建和部署。

已有文章可作为参考：[Hello, World](src/content/posts/hello-world.md) 和 [中文排版示例](src/content/posts/chinese-typography.md)。

## 自定义配置

| 内容                           | 修改位置                     |
| ------------------------------ | ---------------------------- |
| 博客名称、描述、作者、社交链接 | `astro-paper.config.ts`      |
| 首页介绍                       | `src/pages/index.astro`      |
| 关于页                         | `src/content/pages/about.md` |
| 字体与明暗主题配色             | `src/styles/theme.css`       |
| 正文排版                       | `src/styles/typography.css`  |
| 站点图标                       | `public/favicon.svg`         |
| 默认分享图片                   | `public/social-card.svg`     |

### 界面语言

当前 `astro-paper.config.ts` 的 `site.lang` 与 `astro.config.ts` 的 `i18n.defaultLocale` 均为 `en`，路由语言列表也使用 `en`。界面没有语言切换按钮；中文文章可以直接发布，无需修改站点语言。

### 中文字体

正文保留英文等宽字体设置，中文字体依次尝试：

```css
"PingFang SC", "Source Han Sans SC", "Source Han Sans CN", "Microsoft YaHei"
```

其中两个 `Source Han Sans` 名称对应思源黑体的不同字体名称。字体来自访问者设备，不会自动下载；未安装的字体会被跳过。本项目无需在构建时下载 Google Fonts。

### 站点地址

默认地址为 `https://blog.vlzx.dev/`。更换域名时，修改 `astro-paper.config.ts` 中的 `site.url`，或在构建环境中设置 `SITE_URL`：

```bash
SITE_URL=https://example.com npm run build
```

该地址用于 canonical、RSS 和站点地图；更改后需要重新构建并发布。环境变量示例见 `.env.example`。

## 部署

当前使用 Wrangler 直接上传构建产物：

| 配置                  | 值                            |
| --------------------- | ----------------------------- |
| Cloudflare Pages 项目 | `vlzx-blog`                   |
| 生产分支              | `master`                      |
| 输出目录              | `dist`                        |
| 正式域名              | `https://blog.vlzx.dev`       |
| Pages 地址            | `https://vlzx-blog.pages.dev` |

在新设备上先完成登录：

```bash
npx wrangler login
npx wrangler whoami
```

日常发布：

```bash
npm run deploy
```

此命令会先构建，再将产物发布到 `vlzx-blog` 项目的 `master` 生产分支。项目已创建，无需重复创建。当前发布流程不依赖 Git 推送，也未配置推送后自动部署。

如需单独上传已经构建好的产物：

```bash
npx wrangler pages deploy dist --project-name vlzx-blog --branch master
```

Wrangler 凭据由本机保存，不要放进文章、静态资源或提交到仓库。

### 自定义域名

`blog.vlzx.dev` 已关联到 Pages 项目，DNS 记录为：

| 类型  | 名称   | 目标                  | TTL  |
| ----- | ------ | --------------------- | ---- |
| CNAME | `blog` | `vlzx-blog.pages.dev` | 自动 |

迁移或重新配置时，先在 Pages 项目的 **Custom domains** 中关联域名，再设置 DNS。详见 [Cloudflare 自定义域名文档](https://developers.cloudflare.com/pages/configuration/custom-domains/)。

## 许可

AstroPaper 主题使用 MIT 许可，上游版权声明保留在 [LICENSE](LICENSE) 中。
