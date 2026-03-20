import React, { useState, useEffect } from "react";
import {
  fetchUsers,
  createUser,
  type UserData,
  type ApiUser,
} from "./apiCalls";

export default function ApiUsers() {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error("error: ", err);
        setError(err instanceof Error ? err.message : "Error fetching data");
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAddUser = async () => {
    try {
      console.warn("Inside handleAddUser");
      await createUser({
        name: "Alice",
        email: "alice@example.com",
      } as UserData);
      const updatedUsers = await fetchUsers();
      setUsers(updatedUsers);
    } catch (err: unknown) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Error adding user");
    }
  };

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p style={{ color: "maroon" }}>{error}</p>;
  }

  return (
    <>
      <button onClick={() => void handleAddUser()}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </>
  );
}
