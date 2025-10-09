import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://www.vanyaecoproducts.in" });

  const pages = ["/"];

  pages.forEach((page) => {
    sitemap.write({ url: page, changefreq: "weekly", priority: 0.8 });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);
  writeFileSync("./public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated at public/sitemap.xml");
}

generateSitemap();
