const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const Testpage = require('../../pages/tmsandbox.js');

setDefaultTimeout(60 * 1000);


let browser, page, testPage;

Given('the site is reachable', async function () {
  browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  testPage = new Testpage(page);
  await testPage.loadPage();
});

When('the user searches for a common keyword', async function () {
  await testPage.searchPage();
});
