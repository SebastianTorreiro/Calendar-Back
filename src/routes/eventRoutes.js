const {Router} = require('express');
const router = Router();
const { Day } = require('../db.js')

const eventService = require('../service/eventService.js')
const service = new eventService();


router.post("/create", async (req, res)=>{
    try {
        let {name, time, note, dayId} = req.body;
        time = parseInt(time)
        console.log(dayId)
        const newEvent =  await service.createEvent(name, time, note, dayId)
        res.send(newEvent) 

    } catch (error) {
        res.status(404).send(error) 
    }
    
})



module.exports = router
