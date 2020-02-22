// Model schema
const Bootcamp = require('../models/Bootcamp')
const ErrorResponse = require('../utils/errorResponse')

/**
 * @desc Get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access Public
 */
exports.getBootcamps = async (req, res, next) => {
    try {
        const allBootcamps = await Bootcamp.find()
        res.status(200).json({success : true,count:allBootcamps.length, data : allBootcamps})
    } catch (error) {
        res.status(400).json({success:false})
    }
}


/**
 * @desc Get specific bootcamps
 * @route GET /api/v1/bootcamps/:id
 * @access Public
 */
exports.getBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findById(req.params.id)
        if(!bootcamp){
            next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 400))
        }
        res.status(200).json({success : true, data : bootcamp})

    } catch (error) {
        //res.status(400).json({success:false})
        next(new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 400))
    }
}

/**
 * @desc Create new bootcamp
 * @route POST /api/v1/bootcamps
 * @access Public
 */
exports.createBootcamp = async (req, res, next) => {

try {
    const createdBootcamp = await Bootcamp.create(req.body).then((data) => console.log('Created bootcamp successfully'.green.bold)).catch((err) => console.log(err))
    res.status(201).json({
        success : true,
        data : createBootcamp,
    }).catch((err) => {
        res.status(400).json({
            success : false
        })
    })
} catch (error) {
    
}

    
}


/**
 * @desc Update bootcamp
 * @route PUT /api/v1/bootcamps/:id
 * @access Private
 */
exports.updateBootcamp = async (req, res, next) => {

    try {
        const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
            new : true,
            runValidators : true
        })
        if(!bootcamp){
            res.status(400).json({success : false, data : bootcamp})    
        }    
        res.status(200).json({success : true, data : bootcamp})    

    } catch (error) {
        res.status(201).json({
            success : true,
            data : createBootcamp
        }).catch((err) => {
            res.status(400).json({
                success : false
            })
        })
    }
}

/**
 * @desc Delete bootcamp
 * @route POST /api/v1/bootcamps/:id
 * @access Private
 */
exports.deleteBootcamp = async (req, res, next) => {
    try {
        const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)
        if(!bootcamp){
            res.status(400).json({success : false, data : bootcamp})    
        }    
        res.status(200).json({success : true, data : bootcamp})    

    } catch (error) {
        res.status(201).json({
            success : true,
            data : createBootcamp
        }).catch((err) => {
            res.status(400).json({
                success : false
            })
        })
    }
}