const {Router} = require('express');
const router = Router();
const { Day } = require('../db.js')

const dayService = require('../service/dayService.js')
const service = new dayService();

router.post('/create', async (req, res) => {
    try {
        const days =  await service.createDay();
        // Day.bulkCreate(days)
        res.status(201).json(days)
    }catch(error){
    res.status(404).json(error)
    }

})


module.exports = router
