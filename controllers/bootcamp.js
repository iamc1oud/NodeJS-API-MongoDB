
/**
 * @desc Get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access Public
 */
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({
        success : true,
        msg : "Show all bootcamps"
    })
}


/**
 * @desc Get specific bootcamps
 * @route GET /api/v1/bootcamps/:id
 * @access Public
 */
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({
        success : true,
        msg : `Getting bootcamp id ${req.params.id}`
    })
}

/**
 * @desc Create new bootcamp
 * @route POST /api/v1/bootcamps
 * @access Public
 */
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({
        success : true,
        msg: "Created a new bootcamp"
    })
}


/**
 * @desc Update bootcamp
 * @route PUT /api/v1/bootcamps/:id
 * @access Private
 */
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({
        success : true,
        msg: `Update bootcamp id ${req.params.id}`
    })
}

/**
 * @desc Delete bootcamp
 * @route POST /api/v1/bootcamps/:id
 * @access Private
 */
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({
        success : true,
        msg: `Deleted bootcamp id ${req.params.id}`
    })
}