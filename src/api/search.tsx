export function search(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), 3000);
  });
}
