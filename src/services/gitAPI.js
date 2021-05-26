function resolveResponse(response) {
  if (response.status === 200) {
    return response.json();
  }
  if (response.status === 404) {
    throw new Error("404 - User doesn't exist!");
  }
  throw new Error("Something went wrong with server. Try again later.");
}

export function fetchUser(user) {
  const url = `https://api.github.com/users/${user}`;
  return fetch(url).then((response) => resolveResponse(response));
}

export function fetchRepository(user) {
  const url = `https://api.github.com/users/${user}/repos`;
  return fetch(url).then((response) => resolveResponse(response));
}
