import { MyArray } from './my-array';

describe('my-array.createArrayOfSizeTenWithValue', () => {
  let myArray: MyArray;
  beforeEach(() => {
    myArray = new MyArray();
  });
  it('length must be 10', () => {
      const actual: any[] = myArray.createArrayOfSizeTenWithValue(300);
      expect(actual.length).toBe(10);
  });

  it('all values must be 500', () => {
    const actual: any[] = myArray.createArrayOfSizeTenWithValue(500);
    expect(actual.length).toEqual([500, 500, 500, 500, 500, 500, 500, 500, 500, 500]);
  });
});
