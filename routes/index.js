// setting up router
const router = require('express').Router();

const notesRouter = require('./notes');

// directing router to notes file
router.use('/notes', notesRouter);

module.exports = router;

