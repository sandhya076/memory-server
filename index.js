import express from 'express';
import bodyParser from 'body-parser';
import  mongoose  from 'mongoose';
import cors from 'cors';
import memoriesRoutes from "./routes/memories.js"
const app = express();

app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended : true}));
app.use(cors());
app.use("/", (req, res) => {
  res.send("Welcome to memories server hosted from heroku.");
});
app.use("/memories",memoriesRoutes);

const CONNECTION_URL = "mongodb+srv://sandhya:Sandhya@cluster0.trov7.mongodb.net/mySecondDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
.then(() => app.listen(PORT , ()=> console.log(`server running on port : ${PORT}`)))
.catch((error) => console.log(error.message));
