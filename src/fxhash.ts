export const fxhash = (key: Uint8Array, seed = 1) => {
  let a = 0x9e3779b9, b = 0x9e3779b9, c = seed, z = 0;
  while (z < key.length - 12) {
    a += key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24;
    b += key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24;
    c += key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24;
    a -= b + c, a ^= c >> 13, b -= c + a, b ^= a << 8, c -= a + b, c ^= b >> 13;
    a -= b + c, a ^= c >> 12, b -= c + a, b ^= a << 16, c -= a + b, c ^= b >> 5;
    a -= b + c, a ^= c >> 3, b -= c + a, b ^= a << 10, c -= a + b, c ^= b >> 15;
  }
  switch (c += key.length, key.length - z) {
    case 11:
      c += key[10] << 24;
    case 10:
      c += key[9] << 16;
    case 9:
      c += key[8] << 8;
    case 8:
      b += key[7] << 24;
    case 7:
      b += key[6] << 16;
    case 6:
      b += key[5] << 8;
    case 5:
      b += key[4];
    case 4:
      a += key[3] << 24;
    case 3:
      a += key[2] << 16;
    case 2:
      a += key[1] << 8;
    case 1:
      a += key[0];
  }
  a -= b + c, a ^= c >> 13, b -= c + a, b ^= a << 8, c -= a + b, c ^= b >> 13;
  a -= b + c, a ^= c >> 12, b -= c + a, b ^= a << 16, c -= a + b, c ^= b >> 5;
  return a -= b + c, a ^= c >> 3, b -= c + a, b ^= a << 10, c - a - b ^ b >> 15;
};
