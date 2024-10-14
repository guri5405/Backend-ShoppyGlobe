
import mongoose from "mongoose"

/**
 * 
 * @param {String} URI 
 * @returns void
 */
const connectionToDB = async (URI) => {
    mongoose.connect(process.env.MONGO_URI)
    const db = mongoose.connection
    db.on("open", () => {
        console.log("DB Connected..")
    })

    db.on("error", () => {
        console.log("Connection failed.")
    })
}
export default connectionToDB;
