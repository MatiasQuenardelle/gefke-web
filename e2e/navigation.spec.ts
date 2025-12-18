import { test, expect } from '@playwright/test'

test.describe('Navigation', () => {
  test('should navigate to about page', async ({ page }) => {
    await page.goto('/')

    // Click the about link in desktop navigation
    const aboutLink = page.locator('nav a[href="/about"]')
    await aboutLink.click()
    await expect(page).toHaveURL(/\/about/)
  })

  test('should navigate back to homepage via logo', async ({ page }) => {
    await page.goto('/about')

    // Click the logo to go back home
    const logo = page.locator('header h1')
    await logo.click()
    await expect(page).toHaveURL(/\/$/)
  })

  test('should have navigation menu items', async ({ page }) => {
    await page.goto('/')

    // Check that navigation exists with dropdown buttons
    const navButtons = page.locator('nav button')
    await expect(navButtons.first()).toBeVisible()

    // Check about link exists
    const aboutLink = page.locator('nav a[href="/about"]')
    await expect(aboutLink).toBeVisible()
  })

  test('mobile menu should toggle on hamburger click', async ({ page }) => {
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Find and click hamburger button
    const hamburgerButton = page.locator('button[aria-label="Toggle menu"]')
    await hamburgerButton.click()

    // Mobile nav should be visible
    const mobileNav = page.locator('nav.md\\:hidden')
    await expect(mobileNav).toBeVisible()

    // Click again to close
    await hamburgerButton.click()
    await expect(mobileNav).not.toBeVisible()
  })
})
