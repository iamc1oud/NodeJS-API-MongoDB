const express =require('express')
const router = express.Router()

/*
*   Now we will define various routes for get, post, delete and update request on bootcamp.
*   Structure : REQUEST /api/v1/bootcamp/{}
*/
router.get('/', (req, res) => {
    res.status(200).json({
        success : true,
        msg : "Show all bootcamps"
    })
})

router.get('/:id', (req, res) => {
    res.status(200).json({
        success : true,
        msg : `Getting bootcamp id ${req.params.id}`
    })
})

router.post('/', (req, res)=>{
    res.status(200).json({
        success : true,
        msg: "Created a new bootcamp"
    })
})

router.put('/:id',(req, res)=>{
    res.status(200).json({
        success : true,
        msg: `Update bootcamp id ${req.params.id}`
    })
})

router.delete('/:id', (req, res)=> {
    res.status(200).json({
        success : true,
        msg: `Deleted bootcamp id ${req.params.id}`
    })
})

module.exports = router