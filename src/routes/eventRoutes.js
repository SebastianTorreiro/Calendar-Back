const {Router} = require('express');
const router = Router();
const { Day } = require('../db.js')

const eventService = require('../service/eventService.js')
const service = new eventService();


router.get("/", async (req, res)=>{
    

})




module.exports = router
