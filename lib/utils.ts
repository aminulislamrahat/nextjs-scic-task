export function nanoid(size = 10) {
  const a = "0123456789abcdefghijklmnopqrstuvwxyz";
  return Array.from({ length: size }, () => a[Math.floor(Math.random() * a.length)]).join("");
}
