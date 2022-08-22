const fs=require('fs')
const FILE_URL='./restaurant-menu.json'

module.exports={
    readFile:()=>{
        try {
            let rawdata = fs.readFileSync(FILE_URL);
            return JSON.parse(rawdata);
        } catch (error) {
            console.log(error)
        }
    },
    writeFile:(data)=>{
        try {
            let dataToAdd=JSON.stringify(data)
            fs.writeFileSync(FILE_URL, dataToAdd);
            return 'succes'
        } catch (error) {
            console.log(error)
            return `An error has occurred`
        }
    }
}