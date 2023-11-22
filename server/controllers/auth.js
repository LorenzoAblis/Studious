import { db } from "../connect.js"

export const register = (req, res) => {
    
    // Check user if exists\

    const q = "SELECT FROM users WHERE username = ?"

    db.query(q, [req.body.username])

    // Create new user
        // Hash password

}

export const login = (req, res) => {
    
}

export const logout = (req, res) => {
    
}