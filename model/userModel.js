const db = require("../db/connection");

const createUser = async (username, password) => {
  const [result] = await db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, password]
  );
  return result;
};

const findUserByUsername = async (username) => {
  const [rows] = await db.query(
    "SELECT * FROM users WHERE username = ?",
    [username]
  );
  return rows[0];
};

module.exports = { createUser, findUserByUsername };