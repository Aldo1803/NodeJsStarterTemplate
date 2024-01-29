import jwt from 'jsonwebtoken';

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1]; // Bearer TOKEN
        if (!token) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userData = { userId: decoded.userId }; // Add decoded data to request object

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
};

export default authMiddleware;
