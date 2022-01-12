import  express  from "express";
import { getMemorie,createMemorie,updateMemorie,deleteMemorie } from '../controllers/memories.js'


const router = express.Router();
router.get("/",getMemorie);
router.post("/",createMemorie);
router.patch("/:id",updateMemorie);
router.delete("/:id",deleteMemorie);

export default router;