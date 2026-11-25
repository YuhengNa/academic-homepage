import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
for(const [file,target] of [['index.html','https://yuhengna.github.io/'],['zh.html','https://yuhengna.github.io/zh.html'],['404.html','https://yuhengna.github.io/']]) {
  const html=await readFile(path.join(root,'dist',file),'utf8');
  assert(html.includes(`rel="canonical" href="${target}"`));
  assert(html.includes(`content="0;url=${target}"`));
  assert(html.includes('location.search+location.hash'));
  assert(!html.includes('https://yuhengna.github.io/academic-homepage/'));
}
await access(path.join(root,'dist/assets/wechat-qr.jpg'));
await access(path.join(root,'dist/assets/xiaohongshu-qr.jpg'));
console.log('Passed: language destinations, query/hash preservation, and legacy QR assets.');
