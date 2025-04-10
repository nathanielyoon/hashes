export const micro = (key: Uint8Array, seed: number) => {
  let a = seed ^ 0x3b00, b = seed << 15 | seed >>> 17, z = 0;
  while (z < key.length) {
    a = (a + key[z++]) * 9 | 0, b = b - a | 0, a = a << 7 | a >>> 25;
  }
  return (a ^ b) >>> 0;
};
