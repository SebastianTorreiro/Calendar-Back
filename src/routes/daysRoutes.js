const {Router} = require('express');
const router = Router();
const { Day } = require('../db.js')
const { getAllDays } = require('../controllers/days.controller.js')

const DayService = require('../service/dayService.js');
const service = new DayService();


router.get("/", getAllDays)

// router.get("/", async (req, res)=>{
//     try{
//         const allDays = await service.getAllDays();
//         res.status(201).json(allDays)
//     }catch(error){
//         res.status(404).json(error)
//         // console.log(error)
//     }
// })

router.get('/:id', async (req,res)=>{
    const { id } = req.params
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

router.put('/resume', async (req, res)=>{
try {
    const  { resume, idDay }  = req.body;
    if(!resume || !idDay) res.json({message:"Error, missing data"})
    const resumeEdit = await service.editResume(resume, idDay);
    res.json(resumeEdit)
} catch (error) {
    console.log(error)
}

})


module.exports = router
