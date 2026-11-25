# Academic homepage · Legacy URL redirects

学术主页已迁移至 **https://yuhengna.github.io/**。

- 中文版：https://yuhengna.github.io/zh.html
- 技术博客：https://yuhengna.github.io/blog/
- 新的维护仓库：[YuhengNa/YuhengNa.github.io](https://github.com/YuhengNa/YuhengNa.github.io)

本仓库保留旧的 `/academic-homepage/` 地址，自动跳转到新主页；`zh.html` 跳转到中文版。跳转保留查询参数和章节锚点，关闭 JavaScript 时也有刷新跳转和可点击链接。

日后修改简介、News、论文、联系方式或博客，请在新的维护仓库中编辑。本仓库的 `data/` 和原静态生成器仅作为迁移时的源文件备份，当前发布流程不再用它们生成主页；`assets/` 仍随发布复制，以兼容旧图片和二维码地址。

## 本地检查

```sh
npm run build
npm run check
```

`scripts/build-redirect.mjs` 生成跳转页面；`scripts/check-redirect.mjs` 检查中英文目标、参数保留与旧二维码资源。推送 `main` 后由 GitHub Actions 发布。
