import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET() {
  return rss({
    title: "Philosophy Dusting | Collection of Life's Philosophical Writings",
    description: "Collection of Life's Philosophical Writings",
    site: "https://philosophydusting.in",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
