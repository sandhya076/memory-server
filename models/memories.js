import  Mongoose  from "mongoose";

const memories = Mongoose.Schema({
    title : String,
    moment : String,
    day : String,
    hashtag : String

})
 
const srmemories = Mongoose.model("srmemories",memories);

 export default srmemories 