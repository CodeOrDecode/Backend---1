const {Router} = require("express");
const Notemodel = require("../model/noteModel");

const noteRouter = Router();

noteRouter.post("/create",async(req,res)=>{
    const {title,description} = req.body;
    try {
        const note = new Notemodel({title,description});
        await note.save();
        res.status(200).json({message:"note created successfully"});
    } catch (error) {
        res.status(500).json({message:"error create note",error});
    }
})

module.exports = noteRouter;