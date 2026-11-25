import { mkdir, writeFile, cp, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const out = path.join(root, 'dist');
await rm(out, {recursive:true,force:true});
await mkdir(out,{recursive:true});
await cp(path.join(root,'assets'),path.join(out,'assets'),{recursive:true});
for (const [file,lang,target] of [
  ['index.html','en','https://yuhengna.github.io/'],
  ['zh.html','zh-CN','https://yuhengna.github.io/zh.html'],
  ['404.html','en','https://yuhengna.github.io/']
]) {
  const heading = lang==='en' ? 'My homepage has moved' : '个人主页已迁移';
  const label = lang==='en' ? 'Visit my academic homepage' : '访问新的学术主页';
  await writeFile(path.join(out,file), `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${heading} — Yuheng Na</title><link rel="canonical" href="${target}"><meta http-equiv="refresh" content="0;url=${target}"><script>location.replace(${JSON.stringify(target)}+location.search+location.hash)</script><link rel="stylesheet" href="assets/style.css"></head><body><main class="page-shell"><section class="academic-section"><h1>${heading}</h1><p><a href="${target}">${label} ↗</a></p></section></main></body></html>`);
}
await writeFile(path.join(out,'.nojekyll'),'');
await writeFile(path.join(out,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: https://yuhengna.github.io/sitemap.xml\n');
console.log('Built redirects to the shorter academic homepage URL.');
