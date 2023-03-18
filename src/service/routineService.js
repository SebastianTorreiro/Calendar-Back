const { Routine } = require('../db.js')

class RoutineService{

async createRoutine(name, timeForWeek){
    try {
        createdRoutine = await Routine.create({name, timeForWeek});
        console.log(createdRoutine)
        return createdRoutine
    
    } catch (error) {
        return error
    }
}

async deleteRoutine(name){
    try {
        deletedRoutine = Routine.destroy({
            where:{name}
        })
        return deletedRoutine;
    } catch (error) {
        return error
        
    }
    
}







}


module.exports = RoutineService;
