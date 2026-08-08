# LaunchWire – Agefield High SEO 实验

一个极简的静态网站,只有 2 个页面,目标是用 Google Search Console 验证
「Agefield High: Rock the School」是否存在真实的 Google 搜索需求。

技术方案：纯静态 HTML + CSS，无框架、无数据库、无后台、无 API。可以直接部署到 Vercel。

## 目录结构

```
index.html                              首页(网站名 + 一句话说明 + 链接)
agefield-high-rock-the-school/
  index.html                            核心 SEO 页面
styles.css                               全站共用样式
favicon.svg                              占位 favicon
robots.txt
sitemap.xml
vercel.json                              强制 URL 带斜杠(保证 canonical 一致)
```

---

## 1. 如何本地运行

不需要安装任何依赖。有两种方式：

**方式 A：直接双击打开**
直接用浏览器打开 `index.html` 文件即可预览（部分相对路径在纯 `file://` 模式下可能不生效，建议用方式 B）。

**方式 B：本地起一个静态服务器（推荐）**

```bash
cd /Users/lanling/Code/hot_words_websites/Agefield_high
npx serve .
```

终端会给出一个本地地址，通常是：

- 首页：http://localhost:3000/
- 核心页面：http://localhost:3000/agefield-high-rock-the-school/

（如果 3000 端口被占用，终端会提示实际使用的端口号。）

---

## 2. 如何部署到 Vercel

**最简单的方式：Vercel CLI（不需要 GitHub）**

```bash
npm install -g vercel   # 只需安装一次
cd /Users/lanling/Code/hot_words_websites/Agefield_high
vercel                  # 按提示登录 + 确认项目，选默认选项即可
vercel --prod           # 正式发布到生产环境
```

命令执行完会输出一个正式的 `https://xxx.vercel.app` 地址，这就是你的正式 URL。

**或者：通过 GitHub 连接 Vercel（如果你更习惯网页操作）**

1. 把这个文件夹推送到一个新的 GitHub 仓库
2. 打开 vercel.com → New Project → 选择该仓库 → Deploy（不需要改任何构建配置，因为是纯静态站点）

---

## 3. 部署后：正式 URL 在哪里替换

> **状态：已完成替换。** 正式域名是：`https://hot-words-agefield-high-rock-the-sc.vercel.app`

项目最初用了一个占位域名 `agefield-high-guide.vercel.app`，现在已经全部替换为上面这个真实的 Vercel 域名。如果之后又更换了域名（比如换成自己购买的正式域名），需要在以下 **4 个文件**里，把域名替换成新的（原样保留路径部分即可）：

| 文件 | 需要替换的内容 |
|---|---|
| `index.html` | `<link rel="canonical">` 和 `og:url` |
| `agefield-high-rock-the-school/index.html` | `<link rel="canonical">`、`og:url`、JSON-LD 里的 `"url"` |
| `robots.txt` | `Sitemap:` 那一行 |
| `sitemap.xml` | 两个 `<loc>` |

最快的替换方式（在项目根目录执行，把两个域名换成实际的新旧域名）：

```bash
grep -rl "旧域名" . --include="*.html" --include="*.xml" --include="*.txt" \
  | xargs sed -i '' "s/旧域名/新域名/g"
```

替换后 `git commit` + `git push`（如果连了 GitHub，Vercel 会自动重新部署），或者手动 `vercel --prod` 部署一次即可。

---

## 4. canonical / sitemap 是否需要替换域名

**需要**。Canonical URL 必须和 Google 实际抓取到的域名完全一致，否则 Google 可能会索引错误的地址，或者出现"canonical 与实际 URL 不一致"的警告。上线后请务必按第 3 步替换。

---

## 5. 如何添加 Google Search Console

1. 打开 [Google Search Console](https://search.google.com/search-console)
2. 选择「网址前缀」类型（不是「域名」类型，网址前缀验证更快、更适合单页实验）
3. 输入你的正式 URL，例如 `https://hot-words-agefield-high-rock-the-sc.vercel.app/`
4. 推荐验证方式：**HTML 标签验证**
   - Google 会给你一行 `<meta name="google-site-verification" content="xxxx">`
   - 把这行加到 `index.html` 的 `<head>` 里（放在 `</head>` 之前任意位置即可），保存后重新部署
   - 回到 Search Console 点击「验证」

---

## 6. 如何进行 URL Inspection（网址检查）

1. 在 Search Console 左上角搜索框，粘贴完整 URL：
   `https://hot-words-agefield-high-rock-the-sc.vercel.app/agefield-high-rock-the-school/`
2. 按回车，等待检查结果
3. 查看是否显示「网址已收录」或「网址可以收录」

---

## 7. 如何点击 Request Indexing（请求编入索引）

1. 完成第 6 步的网址检查后，页面右上角会有「**请求编入索引 / Request Indexing**」按钮
2. 点击后 Google 会重新抓取这个 URL（一般几分钟到几天内生效，不保证立即收录）
3. 建议对首页 `/` 和核心页面 `/agefield-high-rock-the-school/` 都分别做一次

---

## 8. sitemap 提交路径

1. Search Console 左侧菜单 → 「Sitemaps（站点地图）」
2. 在「添加新的站点地图」输入框里，只需要填：
   ```
   sitemap.xml
   ```
   （Search Console 会自动拼接成 `https://hot-words-agefield-high-rock-the-sc.vercel.app/sitemap.xml`）
3. 点击「提交」

---

## 9. 上线后应该观察哪些数据

Search Console → 「效果 / Performance」报表，重点看：

- **Impressions（展示次数）** —— 有没有人搜到相关词、页面有没有出现在搜索结果里
- **Clicks（点击次数）** —— 有没有人真的点进来
- **Queries（搜索词）** —— 展开看具体是哪些词带来了展示/点击，重点关注：
  - `agefield high`
  - `agefield high rock the school`
  - `agefield high release date`
  - `agefield high ps5`
  - `agefield high gameplay`
  - `agefield high guide`
  - 以及任何你没预设过、但真实相关的新长尾词
- **Average Position（平均排名）** —— 判断是否有机会通过优化冲到首页
- **Country（国家）** —— 判断需求主要来自哪些地区，未来是否需要针对性优化

数据通常需要 **3–14 天** 才会开始稳定出现，不用心急。

---

## 10. SEO Experiment Log（人工记录，无需数据库）

每隔几天手动填一次，直接复制下面这段追加到本文件末尾即可，不需要开发任何后台：

```
### SEO Experiment Log

Date:
Indexed:
Impressions:
Clicks:
Average Position:

Top Queries:
1.
2.
3.
4.
5.

Decision:
- [ ] KEEP SINGLE PAGE
- [ ] EXPAND
- [ ] STOP
```

---

## 验收自查清单

- [x] 本地可以正常启动（`npx serve .`）
- [x] 首页 `/` 正常
- [x] 核心页面 `/agefield-high-rock-the-school/` 正常
- [x] 移动端宽度下无明显布局问题（响应式 CSS）
- [x] 页面源码存在正确 `<title>`
- [x] `meta description` 正确
- [x] `canonical` 正确（占位域名，上线后需替换，见第 3 步）
- [x] `robots.txt` 可访问
- [x] `sitemap.xml` 可访问，且包含核心页面
- [x] 全页仅一个 `<h1>`
- [x] 无虚构的游戏事实（release date / 平台 / 玩法均有公开来源支持，未确认信息统一标注 "Not officially confirmed yet"）
- [x] 未混入 school days / Degrassi / Sims 4 等无关关键词
