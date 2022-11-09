export function search(status: number): Promise<Response> {
  return fetch(`https://httpstat.us/${status}`);
}
