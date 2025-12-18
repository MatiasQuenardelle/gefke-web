import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('should load successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Christian Gefke/)
  })

  test('should display the header with logo', async ({ page }) => {
    const header = page.locator('header')
    await expect(header).toBeVisible()

    const logo = page.getByText('Christian Gefke').first()
    await expect(logo).toBeVisible()
  })

  test('should display the hero section', async ({ page }) => {
    const main = page.locator('main')
    await expect(main).toBeVisible()
  })

  test('should display the contact form section', async ({ page }) => {
    const contactSection = page.locator('#contact')
    await expect(contactSection).toBeVisible()
  })

  test('should display the footer', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })

  test('should have correct meta description', async ({ page }) => {
    const metaDescription = page.locator('meta[name="description"]')
    await expect(metaDescription).toHaveAttribute('content', /.+/)
  })
})
