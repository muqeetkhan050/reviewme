

// const User = require("../models/User");
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

// exports.signup = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;
//     const hashed = await bcrypt.hash(password, 10);
//     const user = await User.create({ name, email, password: hashed });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//     res.status(201).json({ success: true, user: { id: user._id, name: user.name, email: user.email }, token });
//   } catch (err) {
//     res.status(400).json({ success: false, message: err.message });
//   }
// };

// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: "Invalid credentials" });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: "Invalid credentials" });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
//     res.json({ success: true, user: { id: user._id, name: user.name, email: user.email }, token });
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };


// // backend/controllers/authController.js - Add this function
// exports.getUserById = async (req, res) => {
//   try {
//     const { userId } = req.params;
//     const user = await User.findById(userId).select("-password"); // Don't send password
    
//     if (!user) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }
    
//     res.json({ 
//       success: true, 
//       user: { 
//         id: user._id, 
//         name: user.name, 
//         email: user.email 
//       } 
//     });
//   } catch (err) {
//     res.status(500).json({ success: false, message: err.message });
//   }
// };


// backend/controllers/authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    
    // ✅ Make sure response has success: true
    res.status(201).json({ 
      success: true, 
      user: { 
        id: user._id.toString(), 
        name: user.name, 
        email: user.email 
      }, 
      token 
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const match = await bcrypt.compare(password, user.password);
    
    if (!match) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    
    // ✅ Make sure response has success: true
    res.json({ 
      success: true, 
      user: { 
        id: user._id.toString(), 
        name: user.name, 
        email: user.email 
      }, 
      token 
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).select("-password");
    
    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }
    
    res.json({ 
      success: true, 
      user: { 
        id: user._id.toString(), 
        name: user.name, 
        email: user.email 
      } 
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};