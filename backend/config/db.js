const mongoose=require("mongoose")

const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{});
        console.log("database connected");        
    } catch (err) {
        console.error("Error conneccting to mongo db",err)
        process.exit(1);
    }
}

module.exports = connectDb;