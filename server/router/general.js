const express = require("express");
const router = express.Router();
require("../db/conn");
const cors = require("cors");
const Electrician = require("../model/electricianSchema")
const Site = require("../model/siteSchema")
//Middleware
const middleware = (req, res, next) => {
  console.log("Middleware in the house");
  next();
};
router.get("/", (req, res) => {
  res.send("Hello world from the server");
});
router.get("/about", middleware, (req, res) => {
  res.send("Hello world from the About");
});

router.use(cors());
router.use(express.json()); // parsing the json data

router.get("/get-electrician", async(req,res)=>{
    const data = await Electrician.find()
    if (data){
        res.status(200).json({msg:"Data Fetched Succesfully",status:200,data:data})
    }
    else {
        res.status(400).json({error:"Failed to fetch Data",status:400})
    }
})

router.get("/get-siteData", async (req,res)=>{
    const data = await Site.find()
    if(data){
        res.status(200).json({msg:"Data Fetched Successfully",status:200,data:data})
    }
    else {
        res.status(400).json({error:"Failed to fetch data",status: 400})
    }
})

router.post("/upate/:id",async (req,res)=>{
  try {
    const {id} = req.params;
    const {InstallationDate} = req.body;
    try {
      const updateDate = await Site.findByIdAndUpdate(id,{InstallationDate},{new:true});
      return res.json(updateDate);
    } catch (error) {
      return res.status(400).json({msg:"Failed to update",status:400,error})
    }
  } catch (error) {
    return res.status(500).json({error:"Internal Error Occurred", status:500})
  }
})

module.exports = router;
