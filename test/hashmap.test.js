const HashMap = require('../src/hashmap.js');

describe('HashMap', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });

  test('set and get an element correctly', () => {
    hashMap.set('key1', 'value1');
    const result = hashMap.get('key1');

    expect(result).toBe('valor1');
  });

  test('get undefined to a unfefined key', () => {
    const result = hashMap.get('undefined_key');
    expect(result).toBeUndefined();
  });
  test('remplace the existed key when set with the same', () => {
    hashMap.set('key2', 'original_value');
    hashMap.set('key2', 'new_value');

    const result = hashMap.get('key2');
    expect(result).toBe('new_value');
  });
  test('delete element', () => {
    hashMap.put('key3', 'value3');
    hashMap.remove('key3');
    const result = hashMap.get('key3');
    expect(result).toBeUndefined();
  });
  test('change length when is full', () => {
    hashMap.put('key4', 'value4');
    hashMap.put('key5', 'value5');

    const result1 = hashMap.get('key4', 'value4');
    const result2 = hashMap.get('key5', 'value5');

    expect(result1).toBe('value4');
    expect(result2).toBe('value5');
  });
});
