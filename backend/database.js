import mongoose from "mongoose";
const connectDb = async () => {
    try {
        const dbUri = process.env.MONGODB_URI || "mongodb+srv://admin:54UPjtIcCWI5SAmG@cluster0.zykejjk.mongodb.net/";
        await mongoose.connect(dbUri);
        console.log("connected to database")
    } catch (err) {
        console.log(err)
        process.exit(1);
    }
}
export default connectDb;