const roleAuth = (...roles) => {
    return (req, res, next) => {
        try {
            if (!req.user || !req.user.role) {
                return res.status(403).json({
                    success: false,
                    message: "Role not found",
                });
            }

            if (!roles.includes(req.user.role)) {
                return res.status(403).json({
                    success: false,
                    message: "Access denied",
                });
            }

            next();
        } catch (error) {
            return res.status(500).json({
                success: false,
                message: "Role auth error",
            });
        }
    };
};

export default roleAuth;