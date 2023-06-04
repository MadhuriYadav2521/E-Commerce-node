import Users from "../modals/Users.js";


export const getUserByEmail = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.send("Email not found!")
        const response = await Users.find({ email }).exec();
        if (response) {
            return res.send(response[0])
        } else {
            return res.send("User not found!")
        }
    } catch (error) {
        return res.send(error)
    }
}