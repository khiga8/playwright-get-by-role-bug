import { test, expect, } from '@playwright/test';

test('it passes', async({ page }) => {
  await page.goto("https://view-components-storybook.eastus.cloudapp.azure.com/view-components/lookbook/preview/primer/beta/icon_button/default?_display=%257B%2522theme%2522%253A%2522light%2522%252C%2522primitives%2522%253A%2522default%2522%257D");
  await expect(page.getByRole('button')).toHaveCount(1)
  await expect(page.getByRole('button', { name: 'Button' })).toHaveCount(1) // Fails
});
