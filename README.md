# HashMap

A simple implementation of a hash map in JavaScript.

## Usage

```javascript
const HashMap = require('./hash-map.js');

// Create a new instance of HashMap
const myMap = new HashMap();

// Set key-value pairs
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// Get values by key
const value1 = myMap.get('key1'); // returns 'value1'
const value2 = myMap.get('key2'); // returns 'value2'

// Check if a key exists
const hasKey = myMap.has('key1'); // returns true

// Remove a key-value pair
const removed = myMap.remove('key1'); // returns true if successful, false otherwise

// Get the length of the map
const size = myMap.length(); // returns the number of key-value pairs

// Clear the map
myMap.clear();

// Get an array of keys, values, or key-value pairs
const keysArray = myMap.keys(); // returns an array of keys
const valuesArray = myMap.values(); // returns an array of values
const entriesArray = myMap.entries(); // returns an array of key-value pairs
```
