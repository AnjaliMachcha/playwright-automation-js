import { test, expect } from '@playwright/test';

test('Simple PUT API test', async ({ request }) => {

  const updatedData = {
    title: 'updated title',
    body: 'updated body',
    userId: 1
  };

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: updatedData,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody.title).toBe(updatedData.title);
  expect(responseBody.body).toBe(updatedData.body);
});
