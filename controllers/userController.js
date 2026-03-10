const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userModel = require("../model/userModel");

exports.register = async (req, res) => {
    const { username, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await userModel.createUser(username, hashedPassword);

    res.json({ message: "User registered successfully" });
};
  
exports.login = async (req, res) => {
    const { username, password } = req.body;
  
    const user = await userModel.findUserByUsername(username);
  
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }
  
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
  
    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
  
    res.json({ token });
};