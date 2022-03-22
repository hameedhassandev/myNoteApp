var express = require('express');
const router = express.Router();
var noteCtr = require('../controller/note-controller')
router.get("/notes", noteCtr.getAllNotes)
router.get("/notes/save", noteCtr.saveNote)
router.get("/notes/update", noteCtr.updateNote)
router.get("/notes/delete/:notId", noteCtr.deleteNote)

module.exports = router;