import { db } from "../connect.js";
import bcrypt from "bcryptjs";
 
export const register = (req, res) => {
  // Check user if exists\

  const q = "SELECT FROM users WHERE username = ?";

  db.query(q, [req.body.username], (err, data) => {
    if (err) return res.status(500).json(err);
    if (data.length) return res.status(409).json("User already exists");
  });

  // TODO: Create new user
  // Hash password  
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(req.body.password, salt);

  const q = "INSERT INTO users (`username`, `email`, `password`, `name`) VALUE (?)"
  const values = [req.body.username]

  db.query(q, [])
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
