const  express = require('express')
const router = express.Router();

const MenuItem = require("./../models/Menu");

router.get("/", function (req, res) {
    res.send("menu ke ander ho tum....");
  });
  router.post("/", async (req, res) => {
    try {
      const data = req.body;
      const newMenu = new MenuItem(data);
  
      const response = await newMenu.save();
      console.log("data saved");
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  router.get('/:tasteType', async(req,res)=>{
    try{
      const tasteType = req.params.tasteType;
      if(tasteType =='sweet' || tasteType =='spicy' || tasteType == 'sour' ){
        const response = await MenuItem.find({taste: tasteType });
        console.log("response fetched");
        res.status(200).json(response);
      }
      else{
        res.status(404).json({error: "Internal server Error"});
      }
      console.log(err);
      res.status(500).json({ error: "Internal server Error" });
      

    }catch{


    }
  })

  module.exports = router;