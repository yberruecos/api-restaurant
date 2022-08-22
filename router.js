
const express=require('express')
const router=express.Router()
const restaurantController=require('./controllers/restaurantController/controller')
const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/images')
  },
  filename: (req, file, cb) => {
    req.body.photo=`/images/${file.originalname}`
    cb(null, file.originalname)
  },
})

const upload = multer({ storage: storage })
// let upload = multer({ dest: 'images/' });

router.get('/getdish/:id',restaurantController.getDishById)

router.get('/getmenu',restaurantController.getMenu)

router.post('/createdish',upload.single('photo'),restaurantController.createDish)

router.put('/changedish',upload.single('photo'),restaurantController.updateDish)

router.delete('/deletedish/:id',restaurantController.deleteDish)

router.post('/image',upload.single('photo'),restaurantController.saveImage)

// router.post('/image', upload.single('file'), function (req, res) {
//     res.json({data:'succes'})
// })




module.exports = router