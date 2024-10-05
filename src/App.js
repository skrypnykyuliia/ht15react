import React, { useState, useCallback, useMemo } from "react";
import UserList from "./components/UserList";
import styles from "./styles/App.module.css"; // Импорт стилей

function App() {
  const userList = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
    { id: 4, name: "David" },
    { id: 5, name: "Chris" },
    { id: 6, name: "Adam" }
  ];

  const [filter, setFilter] = useState("");

  const filterUsers = useCallback(() => {
    return userList.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [filter]);

  const filteredUsers = useMemo(() => filterUsers(), [filter, filterUsers]);

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.title}>User Filter App</h1>
      <input
        type="text"
        placeholder="Filter users by name..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className={styles.input}
      />
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;