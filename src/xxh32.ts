const l = (a: number, b: number) => a << b | a >>> 32 - b;
const A = 0x9e3779b1, B = 0x85ebca77;
export const xxh32 = (key: Uint8Array, seed: number) => {
  let Z = key.length, z = 0, a = seed;
  if (Z > 15) {
    let X = Z - 15, b = a + B, c = b + A, d = a - A;
    do c += Math.imul(
      B,
      key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24,
    ),
      c = Math.imul(A, l(c, 13)),
      b += Math.imul(
        B,
        key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24,
      ),
      b = Math.imul(A, l(b, 13)),
      a += Math.imul(
        B,
        key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24,
      ),
      a = Math.imul(A, l(a, 13)),
      d += Math.imul(
        B,
        key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24,
      ),
      d = Math.imul(A, l(d, 13)); while (z < X);
    a = l(c, 1) + l(b, 7) + l(a, 12) + l(d, 18) + Z;
  } else a += 0x165667b1 + Z;
  while (z < Z - 4) {
    a += Math.imul(
      0xc2b2ae3d,
      key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24,
    );
    a = Math.imul(0x27d4eb2f, l(a, 17));
  }
  while (z < Z) a = Math.imul(A, l(a + Math.imul(0x165667b1, key[z++]), 11));
  a = Math.imul(a ^ a >>> 15, B), a = Math.imul(a ^ a >>> 13, 0xc2b2ae3d);
  return (a ^ a >>> 16) >>> 0;
};
