import { test, expect } from '@playwright/test';

test('Simple POST API test', async ({ request }) => {

  // 1. Request body (data we send)
  const requestBody = {
    title: 'automation testing',
    body: 'learning api testing',
    userId: 1
  };

  // 2. Send POST request
  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    {
      data: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  // 3. Validate response status
  expect(response.status()).toBe(201);

  // 4. Read response body
  const responseBody = await response.json();

  // 5. Validate response data
  expect(responseBody.title).toBe(requestBody.title);
  expect(responseBody.body).toBe(requestBody.body);
  expect(responseBody.id).toBeTruthy(); // backend created id
});
