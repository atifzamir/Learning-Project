import { MyArray } from './my-array';

describe('my-array.basic-empty', () => {
  beforeEach(() => {
  });
  it('creates an array that is empty array', () => {
      const myArray = new MyArray();
      const actual: any[] = myArray.createBasicEmpty();
      expect(actual).toEqual([]);
  });

  it('length is 0', () => {
    const myArray = new MyArray();
    const actual: any[] = myArray.createBasicEmpty();
    expect(actual.length).toBe(0);
  });

  it('is not null', () => {
    const myArray = new MyArray();
    const actual: any[] = myArray.createBasicEmpty();
    expect(actual).not.toBe(null);
  });
});
