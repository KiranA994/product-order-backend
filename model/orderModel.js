const db = require("../db/connection");

exports.createOrder = async (userId, productIds, totalAmount) => {
  const query =
    "INSERT INTO orders (userId, productIds, totalAmount) VALUES (?, ?, ?)";

  const [result] = await db.query(query, [
    userId,
    JSON.stringify(productIds),
    totalAmount
  ]);
  return result;
};

exports.getOrderById = async (orderId) => {
  const [rows] = await db.query("SELECT * FROM orders WHERE orderId = ?", [
    orderId
  ]);
  return rows;
};

exports.updateOrder = async (orderId, userId, productIds, totalAmount) => {
  const query =
    "UPDATE orders SET userId=?, productIds=?, totalAmount=? WHERE orderId=?";

  const [result] = await db.query(query, [
    userId,
    JSON.stringify(productIds),
    totalAmount,
    orderId
  ]);
  return result;
};

exports.deleteOrder = async (orderId) => {
  const [result] = await db.query("DELETE FROM orders WHERE orderId=?", [
    orderId
  ]);
  return result;
};