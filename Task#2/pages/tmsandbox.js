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
}

module.exports = TestPage;