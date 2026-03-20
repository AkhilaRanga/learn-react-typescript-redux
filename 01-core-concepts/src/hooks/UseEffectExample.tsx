import React, { useState, useEffect } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

export const UseEffectExample = () => {
  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `status: ${res.status}, status text: ${res.statusText}`,
          );
        }
        return res.json();
      })
      .then((data: User[]) => setData(data))
      .catch((err) => {
        console.error("error: ", err);
        setError("Error fetching data");
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};
