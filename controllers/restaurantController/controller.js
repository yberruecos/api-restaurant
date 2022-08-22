const db=require('../../db')
const SUCCESS_CODE=200
const NOT_FOUND_CODE=404

module.exports={
    getDishById:(req,res)=>{
        let menuData = db.readFile()
        let dishTofind=menuData.find((item)=>{
            return item.id===req.params.id
        })
        if(dishTofind){
            res.status(SUCCESS_CODE).send(dishTofind)
        }else {
            res.status(NOT_FOUND_CODE).send(`The id was not found:${req.params.id}`)
        }
    },
    getMenu:(req,res)=>{
        let menuData = db.readFile()
        res.status(SUCCESS_CODE).send(menuData)
    },
    createDish:(req,res)=>{
        let menuData = db.readFile()
        menuData.push({
            id:menuData[menuData.length-1].id+1,
            ...req.body
        })
        let resFromWrite=db.writeFile(menuData)
        res.status(SUCCESS_CODE).json(resFromWrite)
    },
    updateDish:(req,res)=>{
        console.log(req.body)
        let menuData = db.readFile()

        let indexDishToChange=menuData.findIndex((item)=>{
            return item.id===req.body.id
        })

        if(indexDishToChange>=0){
            menuData[indexDishToChange]=req.body
            let resFromWrite=db.writeFile(menuData)
            res.status(SUCCESS_CODE).json(resFromWrite)
        }else {
            res.status(NOT_FOUND_CODE).json(`The id was not found:${req.body.id}`)
        }
    },
    deleteDish:(req,res)=>{
        let menuData = db.readFile()
        let indexDishToDelete=menuData.findIndex((item)=>{
            return item.id===req.params.id
        })
        if(indexDishToDelete>=0){
            menuData.splice(indexDishToDelete,1)
            let resFromWrite=db.writeFile(menuData)
            res.status(SUCCESS_CODE).json(resFromWrite)
        }else {
            res.status(NOT_FOUND_CODE).json(`The id was not found:${req.params.id}`)
        }
    },
    saveImage:(req,res)=>{
        res.send(req.body)
    }
}