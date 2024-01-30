const HashMap = require('../src/hashmap.js');

describe('HashMap', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });

  test('set and get an element correctly', () => {
    hashMap.set('key1', 'value1');
    const result = hashMap.get('key1');

    expect(result).toBe('value1');
  });
  test('has a key in hash table', () => {
    hashMap.set('has_key');
    const result = hashMap.has('has_key');
    expect(result).toBe(true);
  });

  test('Assign null to a key that does not exist.', () => {
    const result = hashMap.get('undefined_key');
    expect(result).toBeNull();
  });
  test('remplace the existed key when set with the same', () => {
    hashMap.set('key2', 'original_value');
    hashMap.set('key2', 'new_value');

    const result = hashMap.get('key2');
    expect(result).toBe('new_value');
  });
  test('delete element', () => {
    hashMap.set('key3', 'value3');
    hashMap.remove('key3');
    const result = hashMap.get('key3');
    expect(result).toBeUndefined();
  });
  test('change length when is full', () => {
    hashMap.set('key4', 'value4');
    hashMap.set('key4', 'value5');

    const result1 = hashMap.get('key4');
    const result2 = hashMap.get('key4');

    expect(result1).toBe('value4');
    expect(result2).toBe('value5');
  });
});
