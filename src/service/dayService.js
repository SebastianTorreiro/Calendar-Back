const { AccessDeniedError } = require('sequelize')
const { Day } = require('../db.js')
// const { getContinents } = require('../clients/countryClient')

const sevenDays = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado",]
const allDays = ["Sabado"]
const febrero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]
const abJunSepNov = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const enMaMayJulAgOcDic = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
class CountryService{


    async createDay(){
        try {
            // console.log(diasNames.length)
            let daysPa = allDays;
            // for (let j = 0; j < 52; j++) {
            //     daysPa.concat(sevenDays)
            // }
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


            // const daysWithNumberOfYear = daysPa.map((d,i) =>{
            // if(0 < i && i < 32){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Enero' 
            //     }
            // }
            // if( 32 <= i && i < 60){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Febrero' 
            //     }
            // }
            // if( 60 <= i && i < 91){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Marzo' 
            //     }
            // }
            // if( 91 <= i && i < 121){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Abril' 
            //     }
            // }
            // if( 121 <= i && i < 152){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Mayo' 
            //     }
            // }
            // if( 152 <= i && i < 182){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Junio' 
            //     }
            // }
            // if( 182 <= i && i < 213){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Julio' 
            //     }
            // }
            // if( 213 <= i && i < 244){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Agosto' 
            //     }
            // }
            // if( 244 <= i && i < 274){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Septiembre' 
            //     }
            // }
            // if( 274 <= i && i < 305){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Octubre' 
            //     }
            // }
            // if( 305 <= i && i < 335){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Noviembre' 
            //     }
            // }
            // if( 335 <= i && i < 366){
            //     return {
            //         name: d,
            //         numberOfYear: i + 1,
            //         numberOfMonth: i + 1,
            //         month: 'Diciembre' 
            //     }
            // }
            // })

            // for (let i = 0; i < daysPa.length; i++) {
            //     const element = daysPam[i];
                
            // }


            // for (let i = 1; i < daysWithNumberOfYear.length; i++) {
            //     const element = array[i];
            //     if(i < 32){

            //     let weeke = week[i]

            //     let pusheable = { 
            //     week: weeke,
            //     month: 'Enero',
            //     }
            //     daysPa.push(pusheable)

            // // }
            //     }                




            // }
            




            // for (let j = 0; j < months.length; j++) {
            //     const month = months[j];

            // if(month === "Febrero"){
                 
            //     for (let i = 0; i < febrero.length; i++) {

            //         let name = diasNames[i];
            //         let number = febrero[i]
            //         let weeke = week[i]
    
            //         let pusheable = { name: name,
            //         number: number,
            //         week: weeke,
            //         month: month,
            //         }
            //         daysPa.push(pusheable)
            //     }
            // }   

            // if(month === "Enero" || "Marzo" ||  "Mayo" || "Julio" || "Agosto" || "Octubre" || "Diciembre" ){

            // enMaMayJulAgOcDic

            //     let name = diasNames[i];
            //     let number = diasNumber31[i]
            //     let weeke = week[i]

            //     let pusheable = { 
            //     name: name,
            //     number: number,
            //     week: weeke,
            //     month: month,
            //     }
            //     daysPa.push(pusheable)

            // }

            



            //     for (let i = 0; i < diasNames.length; i++) {

                 
            //         }
            //         if(month === "Enero" || "Marzo" ||  "Mayo" || "Julio" || "Agosto" || "Octubre" || "Diciembre" ){
            //             let name = diasNames[i];
            //             let number = diasNumber31[i]
            //             let weeke = week[i]
        
            //             let pusheable = { 
            //             name: name,
            //             number: number,
            //             week: weeke,
            //             month: month,
            //             }
            //             daysPa.push(pusheable)

            //         }
            //         if(month === "Abril" || "Junio" || "Septiembre" || "Noviembre"){
            //             let name = diasNames[i];
            //             let number = diasNumber30[i]
            //             let weeke = week[i]
        
            //             let pusheable = { 
            //             name: name,
            //             number: number,
            //             week: weeke,
            //             month: month,
            //             }
            //             daysPa.push(pusheable)

            //         }
            // }


            // console.log(daysPa)
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



}

module.exports = CountryService;
