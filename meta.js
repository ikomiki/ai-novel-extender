const path = require("path");
const { pathToFileURL } = require("url");
const pkg = require("./package.json");

const distURLBase = `https://example.com/dist`;
const packageName = pkg.name;

const production = !process.env.ROLLUP_WATCH;
const baseUrl = !production ? path.join(__dirname, "dist") : distURLBase;

const match = !production
  ? ["https://ai-novel.com/novel.php", "http://127.0.0.1:8080/*"]
  : ["https://ai-novel.com/novel.php"];

let meta = {
  name: production ? packageName : packageName + " -> dev",
  version: pkg.version,
  description: pkg.description,
  homepage: pkg.homepage,
  author: pkg.author,
  namespace: "https://github.com",
  // resource: {
  //   css: pathToFileURL(path.join(baseUrl, "bundle.css")),
  // },
  match: match,
  //   grant: ["GM_addStyle", "GM_getResourceText", "GM_xmlhttpRequest"],
  //   connect: ["github.com"],
  icon: "https://www.google.com/s2/favicons?sz=64&domain=ai-novel.com",
  "run-at": "document-idle",
};

if (!production) {
  meta.require = [pathToFileURL(path.join(baseUrl, "bundle.js"))];
}

if (production) {
  meta.downloadURL = pathToFileURL(path.join(baseUrl, "bundle.js"));
  meta.updateURL = pathToFileURL(path.join(baseUrl, "bundle.js"));
}

module.exports = meta;
