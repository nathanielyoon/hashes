export const adler = (data: Uint8Array, seed = 1) => {
  let a = seed & 0xffff, b = seed >>> 16;
  for (let z = 0, c = data.length, d; z < c;) {
    for (d = Math.min(c - z, 2654) + z; z < d; ++z) b += a += data[z];
    a = 15 * (a >>> 16) + (a & 0xffff), b = 15 * (b >>> 16) + (b & 0xffff);
  }
  return a % 65521 | b % 65521 << 16;
};
