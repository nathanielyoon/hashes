export const mmh3 = (key: Uint32Array, seed: number) => {
  let a = seed;
  for (let z = 0, b; z < key.length; ++z) {
    b = Math.imul(key[z], 0xcc9e2d51);
    a ^= Math.imul(b << 15 | b >>> 17, 0x1b873593);
    a = a << 13 | a >>> 19;
    a = a * 5 + 0xe6546b64;
  }
  a ^= key.length;
  a = Math.imul(a ^ a >>> 16, 0x85ebca6b);
  a = Math.imul(a ^ a >>> 13, 0xc2b2ae35);
  return (a ^ a >>> 16) >>> 0;
};
