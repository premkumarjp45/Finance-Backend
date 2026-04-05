import User from "../models/user.js"


export const getAllUsers = async (req, res) => {

    const email = req.email
    //console.log(email)

    const isAdmin = await User.findOne({ email: email })

    if (!isAdmin.role === "ADMIN") {
        return res.status(403).json({ error: "Access denied. Admin only" })
    }
    const allUsersData = await User.find({})
    res.status(200).json({ users: allUsersData })
}



export const createRecord = (req, res) => {

    res.status(200).json({ message: "Record is Created" })
}