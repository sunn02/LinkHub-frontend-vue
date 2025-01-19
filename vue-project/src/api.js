const API_URL = "http://localhost:3005";

export async function handleHTTPError(response) {
  if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
  return response.json();
}

export async function fetchLinks(tagFilter = null) {
  const url = tagFilter ? `${API_URL}/links/tags/${tagFilter}` : `${API_URL}/links`;
  const response = await fetch(url);
  return handleHTTPError(response);
}

export async function fetchLinkDetails(linkId) {
  const response = await fetch(`${API_URL}/links/${linkId}`);
  return handleHTTPError(response);
}

export async function fetchComments(linkId) {
  const response = await fetch(`${API_URL}/comments/${linkId}`);
  return handleHTTPError(response);
}

export async function voteLink(linkId) {
  const response = await fetch(`${API_URL}/links/vote/${linkId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ vote: 1 }),
  });
  return handleHTTPError(response);
}

export async function saveNewLink(link) {
  const response = await fetch(`${API_URL}/links`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(link),
  });
  return handleHTTPError(response);
}

export async function commentLink(linkId, comment) {
  const response = await fetch(`${API_URL}/comments/${linkId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ content: comment }),
  });
  return handleHTTPError(response);
}
