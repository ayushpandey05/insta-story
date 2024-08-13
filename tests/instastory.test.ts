import { test, expect } from "@playwright/test";

test("should display the home page", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.getByTestId("story-avatar-0").click();
  await page.waitForTimeout(3000);
  await page.getByTestId("show-next-preview").click();
  await page.waitForTimeout(3000);
  await page.getByTestId("show-next-preview").click();
  await page.waitForTimeout(3000);
  await page.getByTestId("show-prev-preview").click();
});
