import { test, expect } from '@playwright/test';

test('Simple DELETE API test', async ({ request }) => {

  const response = await request.delete(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  expect(response.status()).toBe(200);
});
