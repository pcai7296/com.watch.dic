/* ESLint 配置。
 *
 * 在此之前：仓库里只有 .eslintignore、没有 ESLint 配置，且 package.json 的 lint 脚本用了
 * `--format codeframe` —— 该 formatter 在 ESLint 8 已从核心里移除，导致 `npm run lint`
 * 直接以 exit 2 失败，**一个文件都没被检查**。即使去掉 --format，缺 parserOptions 也会把
 * `import` 判成 "Parsing error: The keyword 'import' is reserved"。
 *
 * 这里只提供「能正常解析」所需的最小配置：
 *   - env / parserOptions：支持 ES module 与现代语法
 *   - rules：故意留空。格式由 Prettier 负责，这里只兜语法/解析错误这一层，
 *            避免一次性引入大量既存告警。
 *
 * 注意：`.ux` 没有可用的 parser，所以 lint 脚本只扫 `--ext .js`，不再假装检查 .ux。
 * 若要开始加规则，先跑 `npx eslint --ext .js src/` 评估影响面再逐条开。
 */
module.exports = {
  root: true,
  env: {es2021: true, node: true},
  parserOptions: {ecmaVersion: "latest", sourceType: "module"},
  rules: {}
}
