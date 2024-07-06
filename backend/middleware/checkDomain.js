// middleware/checkDomain.js

function checkDomain(req, res, next) {
    const allowedDomain = 'gne1.gndec.ac.in';
    const origin = req.get('Origin') || req.get('Referer');

    if (origin) {
        const url = new URL(origin);
        if (url.hostname === allowedDomain) {
            return next();
        }
    }

    res.status(403).json({ message: 'Forbidden' });
}

module.exports = checkDomain;