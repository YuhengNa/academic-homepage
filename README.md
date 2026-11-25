# Yuheng Na · Academic Homepage

纳昱恒的中英文学术个人主页。白底、衬线标题、横向论文条目，适配手机和电脑；英文首页和中文版均为完整静态页面，关闭 JavaScript 后也能阅读和切换语言。

网站：https://yuhengna.github.io/academic-homepage/

## 修改内容

日常维护只需编辑 [`data/site.json`](data/site.json)。其中 `en` 与 `zh` 是对应的英文和中文内容。

| 字段 | 内容 |
| --- | --- |
| `profile` | 姓名、简介、邮箱、头像和社交链接 |
| `research` | 研究方向 |
| `news` | 动态，最新一条放在最前面 |
| `publications` | 论文标题、作者角色、简介、配图和链接 |
| `projects` | 开源项目与社区工作 |
| `education` / `experience` | 教育和工作经历 |
| `honors` | 奖项 |
| `site.updated` | 页脚最近更新月份 |

主页已加入本人指定的照片和简介，两篇论文的配图分别截取自原论文的 Figure 1，点击配图可打开对应论文。页面不显示投稿会议或在投提示。完整作者列表与动态可以随后补充；未提供的 Google Scholar 和 CV 链接自动隐藏。工作简介、链接与未来入学状态应随进展更新。

### 添加照片或论文配图

把照片放入 `assets/portrait.jpg`，然后把 `profile.portrait` 改为 `assets/portrait.jpg`。论文配图同理，设置对应论文的 `image`、`imageWidth` 和 `imageHeight`（图片的原始像素尺寸）。图片会被复制到发布目录，并按原始比例完整显示。

### 添加 CV 或 Google Scholar

设置 `profile.cv` 或 `profile.scholar` 为公开的完整 HTTPS 链接；也可以把 CV 放入 `assets/cv.pdf`，并将 `profile.cv` 设为 `assets/cv.pdf`。发布前请自行确认简历中准备公开的联系方式。

### 添加一条动态

```json
{
  "date": "2026.11",
  "text": { "en": "Your update in English.", "zh": "你的中文动态。" },
  "url": "https://example.com/your-project"
}
```

把上面的对象加入 `news` 数组。`url` 可以省略。超过三条时，较早动态自动折叠。

## 本地预览

需要 Node.js 22 或更新版本，无需安装 npm 依赖。

```sh
npm run dev
```

打开命令输出的本地地址。修改内容后重新运行预览命令，或在另一个终端执行 `npm run build` 并刷新网页。

```sh
npm run build
npm run check
```

## 发布

推送到 `main` 后，GitHub Actions 自动生成 `dist/`、检查页面并发布 GitHub Pages。仓库 Settings → Pages 中的 Source 应设置为 **GitHub Actions**。发布配置见 [pages.yml](.github/workflows/pages.yml)。

当前主页使用独立仓库与 `/academic-homepage/` 路径，原有技术博客保留在 GitHub Pages 根路径。如果以后绑定自定义域名，请同步修改 `site.url`。

## 文件结构

```text
data/site.json          中英文内容
assets/style.css        排版、颜色与移动端样式
assets/site.js          导航高亮（非必需）
scripts/build.mjs       零依赖静态生成器
scripts/check.mjs       页面与链接检查
scripts/serve.mjs       本地预览
.github/workflows/      自动发布
```
