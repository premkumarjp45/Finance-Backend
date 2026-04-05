import jwt from "jsonwebtoken"



const authAdmin = (req, res, next) => {

    const authHeaders = req.headers['authorization']
    if (!authHeaders) {
        return res.status(401).json({ error: "Invalid JWT Token" })
    }
    const jwtToken = authHeaders.split(" ")[1]

    jwt.verify(jwtToken, process.env.JWT_SECRET, (error, payload) => {
        if (error) {
            return res.status(401).json({ error: "Invalid JWT Token" })
        }
        req.email = payload.email
        next()
    })


}


export default authAdmin