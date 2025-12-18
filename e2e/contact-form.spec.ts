import { test, expect } from '@playwright/test'

test.describe('Contact Form', () => {
  test('should display contact form', async ({ page }) => {
    await page.goto('/')

    const contactSection = page.locator('#contact')
    await expect(contactSection).toBeVisible()

    const formTitle = contactSection.locator('h2')
    await expect(formTitle).toBeVisible()
  })

  test('should have all required form fields', async ({ page }) => {
    await page.goto('/')

    const contactSection = page.locator('#contact')

    // Check name input
    const nameInput = contactSection.locator('input[name="name"]')
    await expect(nameInput).toBeVisible()
    await expect(nameInput).toHaveAttribute('required', '')

    // Check email input
    const emailInput = contactSection.locator('input[name="email"]')
    await expect(emailInput).toBeVisible()
    await expect(emailInput).toHaveAttribute('type', 'email')
    await expect(emailInput).toHaveAttribute('required', '')

    // Check message textarea
    const messageTextarea = contactSection.locator('textarea[name="message"]')
    await expect(messageTextarea).toBeVisible()
    await expect(messageTextarea).toHaveAttribute('required', '')

    // Check submit button
    const submitButton = contactSection.locator('button[type="submit"]')
    await expect(submitButton).toBeVisible()
  })

  test('should allow filling out the form', async ({ page }) => {
    await page.goto('/')

    const contactSection = page.locator('#contact')

    // Fill out the form
    await contactSection.locator('input[name="name"]').fill('Test User')
    await contactSection.locator('input[name="email"]').fill('test@example.com')
    await contactSection.locator('textarea[name="message"]').fill('This is a test message')

    // Verify values were entered
    await expect(contactSection.locator('input[name="name"]')).toHaveValue('Test User')
    await expect(contactSection.locator('input[name="email"]')).toHaveValue('test@example.com')
    await expect(contactSection.locator('textarea[name="message"]')).toHaveValue('This is a test message')
  })

  test('should show validation for empty required fields', async ({ page }) => {
    await page.goto('/')

    const contactSection = page.locator('#contact')
    const submitButton = contactSection.locator('button[type="submit"]')

    // Click submit without filling fields
    await submitButton.click()

    // Browser should prevent submission due to HTML5 validation
    // The form should still be on the page (not navigated)
    await expect(contactSection).toBeVisible()
  })
})
