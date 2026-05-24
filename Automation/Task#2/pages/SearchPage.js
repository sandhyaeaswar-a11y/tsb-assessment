const { expect } = require("playwright/test");

class TestPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://tmsandbox.co.nz';
  }

  async loadPage() {
    await this.page.goto(this.url);
  }

  async searchPage(query) {
    await this.page.getByRole('searchbox', { name: 'Search all of Trade Me' }).click();
    await this.page.getByRole('searchbox', { name: 'Search all of Trade Me' }).fill(query);
  }

  async clickSearch() {
    await this.page.getByRole('button', { name: 'Search all of Trade Me' }).click();
  }

  async matchResults(query) {
    const results = this.page.locator('tm-search-results tg-col');
    await expect(results.first()).toBeVisible({ timeout: 15000 });
    const resultTexts = await results.allTextContents();
    expect(resultTexts.length).toBeGreaterThan(0);
    const hasRelevantResult = resultTexts.some(text =>
      text.toLowerCase().includes(query.toLowerCase())
    );

    expect(hasRelevantResult).toBe(true);
  }

  async testAllListingSortedByBestMatch() {
    const results = this.page.locator('tm-search-results tg-col');
    await expect(results.first()).toBeVisible({ timeout: 15000 });
    const resultTexts = await results.allTextContents();
    expect(resultTexts.length).toBeGreaterThan(0);
    await expect(this.page.getByLabel('Sort order (optional)')).toHaveValue('0: Default');
  }

  async testNoResultsPage() {
    await expect(this.page.locator('tm-no-results tg-row')).toContainText('No results found');
  }

  async sortByLowestPrice() {
    await this.page.getByLabel('Sort order (optional)').selectOption('2: PriceAsc');
    const results = this.page.locator('tm-search-results tg-col');
    await expect(results.first()).toBeVisible({ timeout: 10000 });
  }

  async verifyLowestPriceOrder() {
    const priceElements = this.page.locator('.tm-marketplace-search-card__price.tm-marketplace-search-card__price-right');
    await expect(priceElements.first()).toBeVisible({ timeout: 15000 });
    const pricesText = await priceElements.allTextContents();
    const prices = pricesText.map(s => s.trim().split(/\s+/)[0].replace(/^\$/, '')).map(v => Number(v.replace(/,/g, ''))).filter(n => !Number.isNaN(n));

    for (let i = 0; i < prices.length - 1; i++) {
      if (prices[i] > prices[i + 1]) {
        throw new Error(
          `Prices are not sorted: ${prices[i]} came before ${prices[i + 1]}`
        );
      }
    }
    expect(prices.length).toBeGreaterThan(0);
  }

  async clickFirstResult() {
    const firstResult = this.page.locator('.tm-marketplace-search-card__detail-section.tm-marketplace-search-card__detail-section--link').first();
    await expect(firstResult).toBeVisible();
    const expectedTitle = await firstResult.textContent();
    await firstResult.click();
    return expectedTitle;
  }

  async verifyNavigation(selectedText) {
    const pageLoadResult = this.page.locator('.tm-property-listing-body__title.p-h1')
    await expect(pageLoadResult).toBeVisible();
    const loadedTitle = await pageLoadResult.textContent();
    expect(selectedText.toLowerCase().trim()).toContain(loadedTitle.toLowerCase().trim());
  }
}


module.exports = TestPage;