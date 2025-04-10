export const mx3 = (key: Uint32Array, seed = 0) => {
  let z = 0, a = seed ^ key.length;
  for (let b; z < key.length; ++z) {
    b = Math.imul(0xbea225f9, key[z]);
    a = Math.imul(0xbea225f9, a + Math.imul(0xbea225f9, b ^ b >> 29 ^ b >> 17));
  }
  while (z < key.length) a = Math.imul(0xbea225f9, a);
  a = Math.imul(0xbea225f9, a ^ a >> 17);
  a = Math.imul(0xbea225f9, a ^ a >> 14);
  return (a ^ a >> 19) >>> 0;
};
