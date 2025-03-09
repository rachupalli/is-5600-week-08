const { it } = require('node:test');
const { mockDb, mockProducts } = require('./db.mock');
const { list } = require('../products');
const productTestHelper = require('./test-utils/productTestHelper');

jest.mock('../db', () => mockDb);
describe('Product Module', () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    // beforeAll(async () => {
    //     await productTestHelper.setupTestData();
    //   });
    
    //   afterAll(async () => {
    //     await productTestHelper.cleanupTestData();
    //   });
      
    test('should list all products', async () => {
      const products = await list();

      expect(products.length).toBe(2);
      expect(products[0].description).toBe('Product 1');
      expect(products[1].description).toBe('Product 2');
    });
  });