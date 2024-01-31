const HashMap = require('../src/hashmap.js');

describe('HashMap', () => {
  let hashMap;

  beforeEach(() => {
    hashMap = new HashMap();
  });

  test('Set and get an element correctly', () => {
    hashMap.set('key1', 'value1');
    const result = hashMap.get('key1');

    expect(result).toBe('value1');
  });

  test('Overwritten values', () => {
    hashMap.set('key_overwritten', 'value');
    hashMap.set('key_overwritten', 'value_overwritted');

    const result = hashMap.get('key_overwritten');
    expect(result).toBe('value_overwritted');
  });

  test('Has a key in hash table', () => {
    hashMap.set('has_key', 'has_value');

    const result1 = hashMap.has('has_key');
    const result2 = hashMap.has('no_has_key');

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });

  test('Assign null to a key that does not exist.', () => {
    const result = hashMap.get('undefined_key');
    expect(result).toBeNull();
  });

  test('Remplace the existed key when set with the same', () => {
    hashMap.set('key2', 'original_value');
    hashMap.set('key2', 'new_value');

    const result = hashMap.get('key2');
    expect(result).toBe('new_value');
  });

  test('Delete element', () => {
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');
    hashMap.set('key3', 'value3');

    const result1 = hashMap.remove('key2');
    const result2 = hashMap.remove('false_key');

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });

  test('Length', () => {
    const result1 = hashMap.length();
    hashMap.set('key4');
    const result2 = hashMap.length();

    expect(result1).toBe(0);
    expect(result2).toBe(1);
  });

  test('Clear', () => {
    hashMap.set('key5');
    hashMap.clear();
    const result = hashMap.get('key5');
    expect(result).toBe(null);
  });

  test('Keys', () => {
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');

    const result = hashMap.keys();
    expect(result).toEqual(expect.arrayContaining(['key1', 'key2']));
  });
  test('Values', () => {
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');
    hashMap.set('Key3');

    const result = hashMap.values();
    expect(result).toEqual(expect.arrayContaining([null, 'value1', 'value2']));
  });

  test('Change length when is full', () => {
    const hashMap = new HashMap(2);

    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');
    hashMap.set('key3', 'value3');

    expect(hashMap._capacity).toBeGreaterThan(2);

    expect(hashMap.get('key1')).toBe('value1');
    expect(hashMap.get('key2')).toBe('value2');
    expect(hashMap.get('key3')).toBe('value3');
  });

  test('Entries', () => {
    hashMap.set('key1', 'value1');
    hashMap.set('key2', 'value2');
    hashMap.set('key3', null);

    const result = hashMap.entries();
    const expectedArray = [
      ['key3', null],
      ['key1', 'value1'],
      ['key2', 'value2'],
    ];

    const sortedResult = result;
    const sortedExpectedArray = expectedArray;

    expect(sortedResult).toEqual(expect.arrayContaining(sortedExpectedArray));
    expect(sortedResult.length).toBe(3);
  });
});
