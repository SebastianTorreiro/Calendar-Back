const {Router} = require('express');
const router = Router();
const { Day } = require('../db.js')

const dayService = require('../service/dayService.js')
const service = new dayService();


router.get("/", async (req, res)=>{
    try{
        const allDays = await service.getAllDays();
        console.log(allDays)
        res.status(201).json(allDays)
    }catch(error){
        res.status(404).json(error)
        // console.log(error)
    }
})

router.get('/:id', async (req,res)=>{
    const { id } = req.params
    console.log(id)
    try {
        const dayById = await service.getDayById(id);
        res.status(201).json(dayById)
    }catch(error){
    res.status(404).json(error)
    }
})

router.post('/create', async (req, res) => {
    try {
        const days =  await service.createDay();
        Day.bulkCreate(days)
        res.status(201).json(days)
    }catch(error){
    res.status(404).json(error)
    }

})


module.exports = router
