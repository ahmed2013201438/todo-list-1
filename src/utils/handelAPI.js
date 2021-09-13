export const fetchAPI = () => {
  return fetch()
    .then(res => {
      if (res.ok) {
        return res.json();
      }
    });
}
