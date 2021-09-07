import React, { useState } from "react";
import axios from "axios";

const CompAxiosCall = () => {
  const [users, setUsers] = useState([]);

  const getUsersData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        setUsers(result.data);
      })
      .catch((err) => {
        console.log({ err });
      });
  };

  return (
    <div>
      <p>List member kabayan coding: </p>
      <button data-testid="get-user" onClick={getUsersData}>
        get user
      </button>
      {users.map((user, i) => (
        <p data-testid="user-name" key={i}>
          {user.name}
        </p>
      ))}
    </div>
  );
};

export default CompAxiosCall;
