const { it } = require('node:test');
const { list } = require('../products');

describe('Product Module', () => {
    test('should list all products', async () => {
      const products = await list();
      expect(products.length).toBeGreaterThan(0);
    });
  });