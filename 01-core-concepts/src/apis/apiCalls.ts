import { api } from "./apiHelper";

export type ApiUser = {
  id: number;
  name: string;
  email: string;
};

export type UserData = {
  name: string;
  email: string;
};

// list
// export async function fetchUsers(): Promise<ApiUser[]> {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json() as Promise<ApiUser[]>;
// }
export function fetchUsers(): Promise<ApiUser[]> {
  return api<ApiUser[]>("https://jsonplaceholder.typicode.com/users");
}

// get
// export async function fetchUserr(id: number): Promise<ApiUser> {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   return res.json() as Promise<ApiUser>;
// }
export function fetchUser(id: number): Promise<ApiUser> {
  return api<ApiUser>(`https://jsonplaceholder.typicode.com/users/${id}`);
}

// create
// export async function createUser(user: UserData): Promise<ApiUser> {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(user),
//   });
//   return res.json() as Promise<ApiUser>;
// }
export function createUser(user: UserData): Promise<ApiUser> {
  return api<ApiUser>("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
}

// update
// export async function updateUser(id: number, data: UserData): Promise<ApiUser> {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     method: "PATCH", // or "PUT"
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   });
//   return res.json() as Promise<ApiUser>;
// }
export function updateUser(id: number, data: UserData): Promise<ApiUser> {
  return api<ApiUser>(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "PATCH", // or "PUT"
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
}

// delete
// export async function deleteUser(id: number): Promise<void> {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
//     method: "DELETE",
//   });
//   return res.json() as Promise<void>;
// }
export function deleteUser(id: number): Promise<void> {
  return api<void>(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "DELETE",
  });
}
