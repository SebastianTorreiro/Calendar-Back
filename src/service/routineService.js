const { Routine } = require('../db.js')

class RoutineService{

async createRoutine(name, timeForWeek){
    try {
        createdRoutine = await Routine.create({name, timeForWeek});
        return createdRoutine
    
    } catch (error) {
        return error
    }

   
    
}

}


module.exports = RoutineService;
