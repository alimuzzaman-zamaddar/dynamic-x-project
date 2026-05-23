export function getAuthHeaders(extraHeaders = {}) {
  const headers = {
    Accept: 'application/json',
    ...extraHeaders,
  };
  const token = localStorage.getItem('token');
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return headers;
}
