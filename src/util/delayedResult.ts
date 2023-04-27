export function delayedResult<T>(x: T, duration = 500) {
  return new Promise((resolve) => setTimeout(() => resolve(x), duration));
}
