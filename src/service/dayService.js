const { Day } = require('../db.js');

const sevenDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado",]
const allDays = ["Sabado"]
const febrero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
const abJunSepNov = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const enMaMayJulAgOcDic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

class DayService{

    async createDay(){
        try {
            let daysPa = allDays;
          
            let j = 0
            while (j < 52) {
                daysPa = daysPa.concat(sevenDays)
                j++
            }
            let step1 = enMaMayJulAgOcDic.concat(febrero)
            let step2 = step1.concat(enMaMayJulAgOcDic)
            let step3 = step2.concat(abJunSepNov)
            let step4 = step3.concat(enMaMayJulAgOcDic)
            let step5 = step4.concat(abJunSepNov)
            let step6 = step5.concat(enMaMayJulAgOcDic)
            let step7 = step6.concat(enMaMayJulAgOcDic)
            let step8 = step7.concat(abJunSepNov)
            let step9 = step8.concat(enMaMayJulAgOcDic)
            let step10 = step9.concat(abJunSepNov)
            let yearComplete = step10.concat(enMaMayJulAgOcDic)

            const dale = [];

           for (let i = 0; i < yearComplete.length; i++) {
            let name = daysPa[i]
            let number = yearComplete[i]
            let month;
            if(0 <= i && i < 31)   month = 'Enero';
            if( 31 <= i && i < 59) month = 'Febrero'
            if( 59 <= i && i < 90) month = 'Marzo'
            if( 90 <= i && i < 120) month = 'Abril'
            if( 120 <= i && i < 151) month = 'Mayo'
            if( 151 <= i && i < 181) month = 'Junio'
            if( 181 <= i && i < 212) month = 'Julio'
            if( 212 <= i && i < 243) month = 'Agosto'
            if( 243 <= i && i < 273) month = 'Septiembre'
            if( 273 <= i && i < 304) month = 'Octubre'
            if( 304 <= i && i < 334) month = 'Noviembre'
            if( 334 <= i && i < 365) month = 'Diciembre'
            
            let pusheable = {
                name,
                numberOfMonth: number,
                month,
                numberOfYear: i + 1
            }
             dale.push(pusheable)
           }


            return dale
        } catch (error) {
            console.log(error);
        }
     
    }

    async getAllDays(){

        try {
            const allDays = await Day.findAll({
                attributes:["name","numberOfMonth", "month", "numberOfYear", 'id']
            })
            return allDays
        } catch (error) {
            console.log(error)
        }
    }

    async getDayById(id){
        try {
            const dayById = await Day.findOne({
                where:{id}
            })
            console.log(dayById)
            return dayById
        }catch (error){
            console.log(error)
            return error
        }
    }


    async editResume(resume, idDay){
        try {
            const resumeUpdated = Day.update({
                resume: resume
            },{
                where: {
                    id: idDay
                }
            })
            return resumeUpdated
            
        } catch (error) {
            return error
        }

    }



}

 module.exports = DayService;