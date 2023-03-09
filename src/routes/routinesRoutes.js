const {Router} = require('express');
const router = Router();
const { Day } = require('../db.js')

const RoutineService = require('../service/RoutineService.js')
const service = new RoutineService();


router.post("/create", async (req, res)=>{
    try {
        const {name, timeForWeek} = req.body
        console.log(name, timeForWeek)
        createdRoutine = service.createRoutine(name, timeForWeek)
        res.send(createRoutine)
    } catch (error) {
        res.send(error)
    }

})


router.delete("/delete", async (req, res)=>{
    try {
        const {name} = req.body
        deletedRoutine = service.deleteRoutine(name)
        res.send(deletedRoutine)
    } catch (error) {
        res.send(error)
    }

})



module.exports = router
