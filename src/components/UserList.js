import React from "react";
import styles from "../styles/UserList.module.css"; // Импорт стилей

const UserList = ({ users }) => {
  return (
    <ul className={styles.userList}>
      {users.map((user) => (
        <li key={user.id} className={styles.userItem}>
          {user.name}
        </li>
      ))}
    </ul>
  );
};

export default UserList;