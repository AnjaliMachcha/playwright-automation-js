import { test, expect } from '@playwright/test';

test('GET posts returns 200 and data', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('id');
});
