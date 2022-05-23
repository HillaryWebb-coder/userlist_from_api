import React, { useEffect, useState } from "react";
import User from "./User";

export default function UsersList({ page, setMaxPages }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let url = "https://reqres.in/api/users?page=" + page;
    const loadUsers = async () => {
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setUsers(jsonResponse["data"]);
      setMaxPages(jsonResponse["total_pages"]);
      console.log(page);
    };

    loadUsers();
  }, [page, setMaxPages]);

  return (
    <div className="users-section">
      {users.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
}
