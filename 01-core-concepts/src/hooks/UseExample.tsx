import React from "react";

type ApiUser = {
  id: number;
  name: string;
  email: string;
};

async function fetchUser(id: number): Promise<ApiUser> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.json() as Promise<ApiUser>;
}

export const UseExample = () => {
  const user = React.use(fetchUser(1));

  return <div>{user.name}</div>;
};
