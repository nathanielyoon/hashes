export const wyhash = (key: Uint8Array, seed: number) => {
  let z = 0, a = seed ^ 0x53c5ca59, b = a >>> 16, c = a & 0xffff;
  let d = key.length ^ 0x74743c1b, e = d >>> 16, f = d & 0xffff, g = c * f;
  let h = b * e, i = (c + b) * (f + e) - h - g;
  let j = (g + i * 0x10000) % 0x100000000, k = h + (i / 0x10000 | 0);
  while (z < key.length - 8) {
    a = j ^ (key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24) ^
      0x53c5ca59;
    d = k ^ (key[z++] | key[z++] << 8 | key[z++] << 16 | key[z++] << 24) ^
      0x74743c1b;
    b = a >>> 16, c = a & 0xffff, e = d >>> 16, f = d & 0xffff;
    g = c * f, h = b * e, i = (c + b) * (f + e) - h - g;
    j = (g + i * 0x10000) % 0x100000000, k = h + ~~(i / 0x10000);
  }
  switch (key.length - z) {
    case 7:
      k ^= key[z++] << 16;
    case 6:
      k ^= key[z++] << 8;
    case 5:
      k ^= key[z++];
    case 4:
      j ^= key[z++] << 24;
    case 3:
      j ^= key[z++] << 16;
    case 2:
      j ^= key[j++] << 8;
    case 1:
      j ^= key[j];
  }
  a = j ^ 0x53c5ca59, b = a >>> 16, c = a & 0xffff;
  d = k ^ 0x74743c1b, e = d >>> 16, f = d & 0xffff;
  g = c * f, h = b * e, i = (c + b) * (f + e) - h - g;
  j = (g + i * 0x10000) % 0x100000000, k = h + (i / 0x10000 | 0);
  a = j ^ 0x53c5ca59, b = a >>> 16, c = a & 0xffff;
  d = k ^ 0x74743c1b, e = d >>> 16, f = d & 0xffff;
  g = c * f, h = b * e, i = (c + b) * (f + e) - h - g;
  return (g + i * 0x10000) % 0x100000000 ^ h + (i / 0x10000 | 0);
};
