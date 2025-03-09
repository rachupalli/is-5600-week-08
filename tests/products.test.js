const { it } = require('node:test');
const { list } = require('../products');
const { mockDb, mockProducts } = require('./db.mock');
const productTestHelper = require('./test-utils/productTestHelper');

describe('Product Module', () => {

    beforeAll(async () => {
        await productTestHelper.setupTestData();
      });
    
      afterAll(async () => {
        await productTestHelper.cleanupTestData();
      });
      
    test('should list all products', async () => {
      const products = await list();
      expect(products.length).toBeGreaterThan(0);
    });
  });