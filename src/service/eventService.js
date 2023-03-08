const { Event, Day } = require('../db.js');

class EventService{

    async createEvent(name, time, note, dayId){
        try {
        const eventCreated = await Event.create({name, time, note})
        console.log(dayId)
        await eventCreated.addDay(dayId);
        return eventCreated
        } catch (error) {
            return error
        }
    }


}

module.exports = EventService