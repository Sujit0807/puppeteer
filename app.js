const puppeteer = require("puppeteer");

puppeteer.launch().then(async (browser) => {
  const page = (await browser.pages())[0];
  await page.setViewport({ width: 1360, height: 1024 });
  await page.goto("https://linegraphmaker.co");
  await page.screenshot({
    path: "line.png",
    fullPage: true,
    omitBackground: true,
  });
  await browser.close();
});