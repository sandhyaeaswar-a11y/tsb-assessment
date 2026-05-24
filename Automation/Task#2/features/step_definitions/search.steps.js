const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber');
const Testpage = require('../../pages/SearchPage.js');

setDefaultTimeout(60 * 1000);

let selectedText;

Given('the user searches for a {string}', async function (query) {
  this.testPage = new Testpage(this.page);
  await this.testPage.loadPage();
  await this.testPage.searchPage(query);
});

When('the user submits the search', async function () {
  await this.testPage.clickSearch();
});

Then('the results list shows relevant items ordered matching the {string}', async function (query) {
  await this.testPage.matchResults(query);
});

Given('the search field is blank space', async function () {
  this.testPage = new Testpage(this.page);
  await this.testPage.loadPage();
  await this.testPage.searchPage(" ");
});

When('the site shows all the listings by best match', async function () {
  await this.testPage.testAllListingSortedByBestMatch();
});

Then('the UI shows No results found message', async function () {
  await this.testPage.testNoResultsPage();
});

When('the user sorts the results by "Lowest Price"', async function () {
  await this.testPage.sortByLowestPrice();
});

Then('the search results should be ordered with the lowest price first', async function () {
  await this.testPage.verifyLowestPriceOrder();
});

When('the user clicks a result', async function () {
  selectedText = await this.testPage.clickFirstResult();
});

Then('the browser navigates to the correct target with expected content', async function () {
  await this.testPage.verifyNavigation(selectedText);
});