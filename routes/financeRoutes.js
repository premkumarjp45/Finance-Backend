import express from "express"
import { createRecord, getAllUsers } from "../middleware/financeRecordsMiddleware.js"
import authAdmin from "../middleware/authAdmin.js"
const financeRouter = express.Router()

financeRouter.post("/users", authAdmin, getAllUsers)
financeRouter.post("/create-record", createRecord)

export default financeRouter