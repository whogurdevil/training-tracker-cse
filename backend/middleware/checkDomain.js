// middleware/checkDomain.js

function checkDomain(req, res, next) {
  const allowedCollegeDomain = "gne1.gndec.ac.in";
  const allowedVercelDomain = "training-tracker-gndec.vercel.app";
  const origin = req.get("Origin") || req.get("Referer");
  const publicUrl = "/api/certificate/";

  if (req.url.startsWith(publicUrl)) {
    return next();
  }
  if (origin) {
    const url = new URL(origin);
    if (
      url.hostname === allowedCollegeDomain ||
      url.hostname === allowedVercelDomain
    ) {
      return next();
    }
  }

  res.status(403).json({ message: "Forbidden" });
}

module.exports = checkDomain;
