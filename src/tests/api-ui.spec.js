import { test, expect } from '@playwright/test';

test('API + UI: use API data in UI validation', async ({ request, page }) => {
  // 1) Get data from API (backend)
  const apiResponse = await request.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );
  expect(apiResponse.status()).toBe(200);

  const todo = await apiResponse.json();
  expect(todo.title).toBeTruthy();

  // 2) Open UI app (frontend)
  await page.goto('https://demo.playwright.dev/todomvc');

  // 3) Use API data inside UI (create todo in UI using title from API)
  await page.getByPlaceholder('What needs to be done?').fill(todo.title);
  await page.keyboard.press('Enter');

  // 4) Validate in UI
  await expect(page.getByText(todo.title)).toBeVisible();
});
