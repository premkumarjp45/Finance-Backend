import User from "../models/user.js"


export const getAllUsers = async (req, res) => {

    const email = req.email
    //console.log(email)

    const isAdmin = await User.findOne({ email: email })

    if (!isAdmin.role === "ADMIN") {
        return res.status(403).json({ error: "Access denied. Admin only" })
    }
    const allUsersData = await User.find({})
    const filteredData = allUsersData.filter((item) => item.role !== "ADMIN")
    res.status(200).json({ users: filteredData })
}



export const getSingleUser = async (req, res) => {
    const { userId } = req.params

    const isUser = await User.findOne({ _id: userId })

    if (!isUser) {
        return res.status(400).json({ error: "User not found" })
    }

    const { name, email, role, status } = isUser

    return res.status(200).json({
        name, email, role, status
    })

}


export const updateUserRoleAndStatus = async (req, res) => {
    const { userId } = req.params
    const { role = undefined, status = undefined } = req.body
    console.log(role)
    const isUser = await User.findOne({ _id: userId })

    if (!isUser) {
        return res.status(400).json({ error: "User not found" })
    }
    if (role) {
        const roles = ["ADMIN", "ANALYST", "VIEWER"];


        if (!roles.includes(role)) {
            return res.status(400).json({ error: "Invalid Role" })
        }
        await User.updateOne({ _id: userId }, { $set: { role: role } })
        return res.status(200).json({ message: "User role updated." })


    } else {
        const lists = ["active", "inactive"];


        if (!lists.includes(status)) {
            return res.status(400).json({ error: "Invalid Status" })
        }
        await User.updateOne({ _id: userId }, { $set: { status: status } })
        return res.status(200).json({ message: "User status updated." })


    }



}


export const deleteUser = async (req, res) => {
    const { userId } = req.params


    const isUser = await User.findOne({ _id: userId })

    if (!isUser) {
        return res.status(400).json({ error: "User not found" })
    }

    await User.deleteOne({ _id: userId })
    return res.status(200).json({ message: "User deleted." })

}






export const createRecord = (req, res) => {

    res.status(200).json({ message: "Record is Created" })
}