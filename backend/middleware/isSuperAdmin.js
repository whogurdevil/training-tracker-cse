const jwt = require('jsonwebtoken')
const JWT_Token = process.env.JWT_TOKEN;

function isAdmin(req, res, next) {
    // Get the authentication token from the request headers
    const token = req.header('auth-token')
    if (!token) {
        return res.status(401).json({ message: 'Authentication token not provided' });
    }
    try {
        // Verify the token and decode its payload
        const decodedToken = jwt.verify(token, JWT_Token);

        // Check if the user role is "admin"
        if (decodedToken.user.role !== 'superadmin') {
            return res.status(403).json({ message: 'You are not authorized to access this resource' });
        }
        // User is authorized, proceed to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid authentication token' });
    }
}
module.exports = isAdmin;