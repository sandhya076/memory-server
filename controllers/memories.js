import mongoose from "mongoose";
import Memories from "../models/memories.js"

export const getMemorie = async(req,res) =>{
    try{
        const memories = await Memories.find();
        res.status(200).json(memories);
    }catch(error){
        res.status(404).json({message:error.message});
    }
};

export const createMemorie = async(req,res) => {
    const mem = req.body;
    const newMemorie = new Memories(mem);
    try{
        await newMemorie.save();
        res.status(200).json(newMemorie);
    }
    catch(error){
        res.status(404).json({message:error.message});
    }
};
export const updateMemorie = async(req,res) => {
    const{id:id} = req.params;
    const mem = req.body;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "there is no memorie with that id"});
    }
    const updatedmemorie = await Memories.findByIdAndUpdate(id,{...mem,id});
    res.json(updatedmemorie);
}


export const deleteMemorie = async(req,res) => {
    const{id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message: "There is no memorie with that id"});
    }
    await Memories.findByIdAndRemove(id);
    res.json({message:"memorie deleted successfully"});
};

