export function removeKeys(obj: object, keys: string[]): object {
  const filtered = Object.keys(obj).filter(key => keys.includes(key))


  return filtered.reduce((_obj, key) => {

    _obj[key]
  }, {})
}
