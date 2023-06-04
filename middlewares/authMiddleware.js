export const checkEmail = (req, res, next) => {
    try {
        const { email } = req.body;
        if (!email) return res.send("Email not Found in middleware");
        next();
    } catch (error) {
        res.send(error)
    }
}