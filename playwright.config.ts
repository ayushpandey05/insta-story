// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',  // directory where your tests will be located
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Google Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
