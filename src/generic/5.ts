/*
  You need to implement the KeyValuePair interface, which describes a key-value pair.
  Use generics so that this interface can work with any type of key and value.
*/

interface KeyValuePair<TKey, TValue> {
  key: TKey;
  value: TValue;
}

export {};
