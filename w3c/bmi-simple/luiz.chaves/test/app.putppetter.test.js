const assert = require("assert");
const puppeteer = require("puppeteer");
const page = "../index.html";
let browser;
let page;

before(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});

describe("Alibaba Search", () => {
  it("has search input", async () => {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto(page, { waitUntil: "networkidle0" });
    const heightInput = await page.$("input#altura");
    assert.ok(heightInput);
  }).timeout(20000);
});

after(async () => {
  await browser.close();
});
