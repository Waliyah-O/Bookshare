import axios from "axios"

export async function getBooks(id) {
  const url = id ? `/api/books/${id}` : "/api/books"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch books",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.books
}

export async function checkHostIdExists(hostId) {
  return hostId !== undefined && hostId !== null;
}

export async function getHostBooks(id) {
  const url = id ? `/api/host/books/${id}` : "/api/host/books"
  const res = await fetch(url)
  if (!res.ok) {
    throw {
      message: "Failed to fetch books",
      statusText: res.statusText,
      status: res.status
    }
  }
  const data = await res.json()
  return data.books
}

export async function loginUser(creds) {
  const res = await fetch("/api/login",
    { method: "post", body: JSON.stringify(creds) }
  )
  const data = await res.json()

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    }
  }

  return data
}

export async function signupUser(creds) {
  const res = await fetch("/api/signup", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}