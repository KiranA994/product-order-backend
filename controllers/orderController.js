const orderModel = require("../model/orderModel");

function parseProductIds(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== "string") return value;
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

exports.createOrder = (req, res) => {
  const { userId, productIds, totalAmount } = req.body;

  if (!userId || !Array.isArray(productIds) || productIds.length === 0 || totalAmount === undefined || totalAmount === null) {
    return res.status(400).json({ error: "All fields are required" });
  }

  orderModel
    .createOrder(userId, productIds, totalAmount)
    .then((result) => {
      res.status(201).json({
        message: "Order created",
        orderId: result.insertId
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.getOrder = (req, res) => {
  const orderId = req.params.id;

  orderModel
    .getOrderById(orderId)
    .then((rows) => {
      if (rows.length === 0) {
        return res.status(404).json({ message: "Order not found" });
      }

      const order = rows[0];
      res.json({
        ...order,
        productIds: parseProductIds(order.productIds)
      });
    })
    .catch((err) => res.status(500).json(err));
};

exports.updateOrder = (req, res) => {
  const orderId = req.params.id;
  const { userId, productIds, totalAmount } = req.body;

  if (!userId || !Array.isArray(productIds) || productIds.length === 0 || totalAmount === undefined || totalAmount === null) {
    return res.status(400).json({ error: "All fields are required" });
  }

  orderModel
    .updateOrder(orderId, userId, productIds, totalAmount)
    .then((result) => {
      if (!result || result.affectedRows === 0) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.json({ message: "Order updated successfully" });
    })
    .catch((err) => res.status(500).json(err));
};

exports.deleteOrder = (req, res) => {
  const orderId = req.params.id;

  orderModel
    .deleteOrder(orderId)
    .then((result) => {
      if (!result || result.affectedRows === 0) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.json({ message: "Order deleted successfully" });
    })
    .catch((err) => res.status(500).json(err));
};