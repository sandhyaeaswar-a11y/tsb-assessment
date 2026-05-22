const { expect } = require("playwright/test");

class TestPage {
  constructor(page) {
    this.page = page;
    this.url = 'https://tmsandbox.co.nz';
  }

  async loadPage() {
    await this.page.goto(this.url);
  }

  async searchPage() {
      await this.page.getByRole('searchbox', { name: 'Search all of Trade Me' }).click();
      await this.page.getByRole('searchbox', { name: 'Search all of Trade Me' }).fill('cars');
      await this.page.getByRole('button', { name: 'Search all of Trade Me' }).click();
  }
}

module.exports = TestPage;