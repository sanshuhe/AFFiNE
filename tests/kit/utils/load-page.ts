import type { Page } from '@playwright/test';

export const webUrl = 'http://localhost:8080';

export async function openHomePage(page: Page) {
  await page.goto(webUrl);
}

export async function openPluginPage(page: Page) {
  await page.goto(`${webUrl}/_plugin/index.html`);
}
