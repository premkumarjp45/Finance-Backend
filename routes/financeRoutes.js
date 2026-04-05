import express from "express"
import { createRecord, getAllUsers, getSingleUser, updateUserRoleAndStatus, deleteUser } from "../middleware/financeRecordsMiddleware.js"
import authAdmin from "../middleware/authAdmin.js"
const financeRouter = express.Router()

financeRouter.get("/users", authAdmin, getAllUsers)
financeRouter.get("/users/:userId", authAdmin, getSingleUser)
financeRouter.post("/users/:userId", authAdmin, updateUserRoleAndStatus)
financeRouter.delete("/users/:userId", authAdmin, deleteUser)
financeRouter.post("/create-record", createRecord)

export default financeRouter