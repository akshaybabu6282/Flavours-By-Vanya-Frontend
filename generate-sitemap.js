import { writeFileSync } from "fs";
import { SitemapStream, streamToPromise } from "sitemap";

import { products } from "./src/data/products.js";

async function generateSitemap() {

  const sitemap = new SitemapStream({
    hostname: "https://www.vanyaecoproducts.in"
  });

  const pages = [
    "/",
    ...products.map((product) => `/product/${product.slug}`)
  ];

  pages.forEach((page) => {
    sitemap.write({
      url: page,
      changefreq: "weekly",
      priority: page === "/" ? 1.0 : 0.8
    });
  });

  sitemap.end();

  const data = await streamToPromise(sitemap);

  writeFileSync("./public/sitemap.xml", data.toString());

  console.log("✅ Sitemap generated successfully");
}

generateSitemap();