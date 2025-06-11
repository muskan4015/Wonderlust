const mongoose=require("mongoose");
const initdata=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb+srv://Muskan14:admin123@cluster0.fk2vjko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main().then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log(err);
});
async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB=async()=>{
    await Listing.deleteMany({});
    initdata.data=initdata.data.map((obj)=>({
        ...obj,
        owner:"683899dec4b026ca0bd1d550"
    }));
    await Listing.insertMany(initdata.data);
    console.log("Data was Initialized");
}

initDB();