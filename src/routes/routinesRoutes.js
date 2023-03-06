const {Router} = require('express');
const router = Router();
const { Day } = require('../db.js')

const RoutineService = require('../service/RoutineService.js')
const service = new RoutineService();


router.get("/", async (req, res)=>{

})




module.exports = router
