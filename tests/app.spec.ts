import { expect, test } from '@playwright/test'

test('Navigating to Home', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByRole('heading')).toContainText('Welcome to Our Home')
})

test('Navigating to About', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('link', { name: 'About' }).click()
  await expect(page.getByRole('heading')).toContainText('About Us')
})
