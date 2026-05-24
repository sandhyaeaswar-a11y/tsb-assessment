const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://api.trademe.co.nz/v1/Categories.json';

test('API_001 - Verify that the categories API returns HTTP 200', async ({ request }) => {
    const response = await request.get(BASE_URL);
    expect(response.status()).toBe(200);
});

test('API_002 - Verify that the response content type received is JSON', async ({ request }) => {
    const response = await request.get(BASE_URL);
    expect(response.headers()['content-type']).toContain('application/json');
});

test('API_003 - Verify that the response body is not empty', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const body = await response.json();
    expect(body).toBeTruthy();
});

test('API_004 - Verify that the required category fields are present', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const body = await response.json();
    expect(body).toHaveProperty('Name');
    expect(body).toHaveProperty('Number');
    expect(body).toHaveProperty('Path');
    expect(body).toHaveProperty('Subcategories');
});

test('API_005 - Verify that the category field data types are correct', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const body = await response.json();
    expect(typeof body.Name).toBe('string');
    expect(typeof body.Number).toBe('string');
    expect(typeof body.Path).toBe('string');
    expect(Array.isArray(body.Subcategories)).toBe(true);
});

test('API_006 - Verify that the root category structure is valid', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const body = await response.json();
    expect(body.Number).toBe('');
    expect(body.Subcategories.length).toBeGreaterThan(0);
});

test('API_007 - Verify that the nested subcategories are returned correctly', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const body = await response.json();
    const firstSubcategory = body.Subcategories[0];
    expect(firstSubcategory).toHaveProperty('Name');
    expect(firstSubcategory).toHaveProperty('Number');
});

test('API_008 - Verify that the category names are non-empty', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const body = await response.json();
    body.Subcategories.forEach(category => {
        expect(category.Name.trim().length).toBeGreaterThan(0);
    });
});

test('API_009 - Verify that the invalid endpoint returns 400', async ({ request }) => {
    const response = await request.get(
        'https://api.trademe.co.nz/v1/Categories/Invalid.json'
    );
    expect([400, 404]).toContain(response.status());
});

test('API_010 - Verify that if the wrong request method is used, the API rejects it safely', async ({ request }) => {
    const response = await request.post(BASE_URL);
    expect([404, 405, 400]).toContain(response.status());
});

test('API_011 - Verify that the response body does not expose any sensitive data', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const bodyText = await response.text();
    expect(bodyText.toLowerCase()).not.toContain('stacktrace');
    expect(bodyText.toLowerCase()).not.toContain('sql');
    expect(bodyText.toLowerCase()).not.toContain('exception');
});

test('API_012 - Verify that the API response time is acceptable', async ({ request }) => {
    const startTime = Date.now();
    const response = await request.get(BASE_URL);
    const responseTime = Date.now() - startTime;
    expect(response.status()).toBe(200);
    expect(responseTime).toBeLessThan(2000);
});

test('API_013 - Verify that the API returns consistent structure', async ({ request }) => {
    const response1 = await request.get(BASE_URL);
    const response2 = await request.get(BASE_URL);
    const body1 = await response1.json();
    const body2 = await response2.json();
    expect(Object.keys(body1)).toEqual(Object.keys(body2));
});

test('API_014 - Verify that the response headers are correct', async ({ request }) => {
    const response = await request.get(BASE_URL);
    const headers = response.headers();
    expect(headers).toHaveProperty('content-type');
});